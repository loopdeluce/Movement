class MovementSessionsController < ApplicationController

  def index
    movement_sessions = MovementSession.all
    render json: movement_sessions

  end

  def create
    movement_session = MovementSession.create!(movement_session_params)
    render json: movement_session, serializer: MovementSessionWithoutActivitiesSerializer, status: :created
  end

  def update
    movement_session = find_movement_session
    movement_session.update!(movement_session_params)
    render json: movement_session, serializer: MovementSessionWithoutActivitiesSerializer
  end

  def destroy
    movement_session = find_movement_session
    movement_session.destroy
    head :no_content
  end

  def user_movement_sessions_index
    user = User.find(params[:id])
    activities = Activity.where(user_id: user.id)
    movement_sessions_sorted = activities.map{ |activity| activity.movement_session}.uniq.sort_by{|session| -(session.datetime_session_start.to_i)}
    render json: movement_sessions_sorted, each_serializer: MovementSessionWithSummarySerializer, include: ['activities', 'activities.activity_stat']
  end

  private

  def movement_session_params
    params.permit(:title, :datetime_session_start, :id)
  end

  def find_movement_session
    MovementSession.find_by!(id: params[:id])
  end

  
end
