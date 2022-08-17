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

  private

  def movement_session_params
    params.permit(:title, :datetime_session_start)
  end

  def find_movement_session
    MovementSession.find_by!(id: params[:id])
  end

  
end
