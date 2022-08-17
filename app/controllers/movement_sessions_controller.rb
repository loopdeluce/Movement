class MovementSessionsController < ApplicationController

  def index
    render json: MovementSession.all
  end

  def create
    movement_session = MovementSession.create!(movement_session_params)
    render json: movement_session, status: :created
  end

  private

  def movement_session_params
    params.permit(:title, :datetime_session_start)
  end
end
