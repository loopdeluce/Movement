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

  private

  def all_params
    params.permit(:user_id, :description, :private_notes, :is_stats_public, :datetime_activity_finish, :time_seconds, :exertion, :movement_type, :movement_session_id)
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

