class ActivitiesController < ApplicationController

  def index
    render json: Activity.all
  end

  def create
    movement_session_id = MovementSession.find(params[:movement_session_id]).id
    movement_type_id = MovementType.find_by(movement_type: params[:movement_type]).id
    all_activity_params = activity_params.merge!(movement_session_id: movement_session_id, movement_type_id: movement_type_id)
    activity = Activity.create!(all_activity_params)
    all_activity_stat_params = activity_stat_params.merge!(activity_id: activity.id)
    ActivityStat.create!(all_activity_stat_params)
    render json: activity, serializer: ActivityWithStatsSerializer, status: :created
  end

  def destroy
    activity = Activity.find_by!(id: params[:id])
    activity.destroy
    head :no_content
  end

  def summary
    user = User.find(params[:id])
    activities = Activity.where(user_id: user.id)
    date_time = DateTime.new(params[:year].to_i)
    begin_year = date_time.beginning_of_year
    end_year = date_time.end_of_year
    filtered_by_year_activities = activities.where("datetime_activity_finish >= ? and datetime_activity_finish <= ?", begin_year, end_year )
    if (params[:movement_type])
      filtered_movements = filtered_by_year_activities.joins(:movement_type).merge(MovementType.where(movement_type: params[:movement_type]))
    else
      filtered_movements = filtered_by_year_activities
    end
    
    summary_hash={}

    unless activities.empty?
      movements = filtered_movements.map{|movement| movement.movement_type.movement_type.to_sym}.uniq()
      movement_hash = movements.to_h{ |category| [category, 0]}
      empty_hash = {}
      donut_hash = {}
      multiple_hash = {}
      exertion_series = []
      area_series = []

      if params[:uom] === 'number'
        if filtered_movements.length === 1
          category = filtered_movements.first.movement_type.movement_type.to_sym
          movement_type_frequency = {}
          movement_type_frequency[category] = filtered_movements.first.activity_stat.time_seconds
        else
          movement_type_frequency = filtered_movements.reduce do |empty_hash, movement|
            category = movement.movement_type.movement_type.to_sym
            movement_hash[category] += 1
            movement_hash
          end
        end
        

        if filtered_by_year_activities.length === 1
          category = filtered_by_year_activities.first.movement_type.movement_type.to_sym
          movement_hash[category] = 1
          all_frequency = movement_hash
        else
          all_frequency = filtered_by_year_activities.reduce do |empty_hash, movement|
            category = movement.movement_type.movement_type.to_sym
            movement_hash[category] += 1
            movement_hash
          end
        end
        

        all_frequency = all_frequency.sort_by{|key, value| value}.reverse.to_h

       
        (1..12).each do |n|
          wanted_activities = filtered_movements.where('extract(month from datetime_activity_finish) = ?', n)
          if(wanted_activities.length > 0)
            exertion_average = (wanted_activities.inject(0){|sum, activity| sum + activity.activity_stat.exertion}.to_f / wanted_activities.length.to_f).round(1)
            month_activities = wanted_activities.inject(0){|sum, activity| sum + 1}
          else
            exertion_average = 0
            month_activities = 0
          end
          exertion_series << exertion_average
          area_series << month_activities
        end
        
      else
        if filtered_movements.length === 1
          category = filtered_movements.first.movement_type.movement_type.to_sym
          movement_type_frequency = {}
          movement_type_frequency[category] = filtered_movements.first.activity_stat.time_seconds
        else
          movement_type_frequency = filtered_movements.reduce do |empty_hash, movement|
            category = movement.movement_type.movement_type.to_sym
            movement_hash[category] += movement.activity_stat.time_seconds
            movement_hash
          end
        end
        
        if filtered_by_year_activities.length === 1
          category = filtered_by_year_activities.first.movement_type.movement_type.to_sym
          movement_hash[category] = 1
          all_frequency = movement_hash
        else
          all_frequency = filtered_by_year_activities.reduce do |empty_hash, movement|
            category = movement.movement_type.movement_type.to_sym
            movement_hash[category] += 1
            movement_hash
          end
        end

        all_frequency = all_frequency.sort_by{|key, value| value}.reverse.to_h

        (1..12).each do |n|
          wanted_activities = filtered_movements.where('extract(month from datetime_activity_finish) = ?', n)
          zero = 0
          zero2 = 0
          if(wanted_activities.length > 0)
            exertion_average = (wanted_activities.inject(0){|sum, activity| sum + activity.activity_stat.exertion}.to_f / wanted_activities.length.to_f).round(1)
            month_activities = ((wanted_activities.inject(0){|sum, activity| sum + activity.activity_stat.time_seconds}).to_f / 3600).round(1)
          else
            exertion_average = 0
            month_activities = 0
          end
          exertion_series << exertion_average
          area_series << month_activities
        end
      end

      summary_hash[:total_days] = filtered_movements.map{|movement| movement.datetime_activity_finish.strftime("%m/%d%Y")}.uniq.length
      
      total_secs = filtered_movements.map{|movement| movement.activity_stat.time_seconds}.inject(:+)
      summary_hash[:total_hours] = (total_secs.to_f / 3600).round(1)
      
      summary_hash[:total_movements] = filtered_movements.length

      longest_activity_hours = filtered_movements.joins(:activity_stat).merge(ActivityStat.order(time_seconds: :desc)).first.activity_stat.time_seconds.to_f
      summary_hash[:longest_movement_hours] = (longest_activity_hours/ 3600).round(1)
      
      max_movement = movement_type_frequency.max_by{|key, value| value}
      summary_hash[:popular_movement] = max_movement

      sessions = filtered_movements.map{|activity| activity.movement_session}.uniq
      movements_per_session = sessions.map{|session| session.activities.length}

      avg_movements_per_session = (movements_per_session.inject(:+).to_f / movements_per_session.length.to_f).round(1)
      summary_hash[:average_movements_per_session] = avg_movements_per_session

      donut_hash[:series] = all_frequency.values
      donut_hash[:labels] = all_frequency.keys
      summary_hash[:donut_hash] = donut_hash

      multiple_hash[:exertion_series] = exertion_series
      multiple_hash[:area_series] = area_series
      summary_hash[:multiple_hash] = multiple_hash

      return render json: summary_hash
    end

    render json: {errors: ["No activities found"]}
  end



  private

 

  def all_params
    params.permit(:user_id, :description, :private_notes, :is_stats_public, :datetime_activity_finish, :time_seconds, :exertion, :movement_type, :movement_session_id, :year)
  end

  def activity_params
    all = all_params
    activity_params = all.slice(:user_id, :description, :private_notes, :is_stats_public, :datetime_activity_finish)
  end

  def activity_stat_params
    all = all_params
    activity_stat_params = all.slice(:time_seconds, :exertion)
  end


end

