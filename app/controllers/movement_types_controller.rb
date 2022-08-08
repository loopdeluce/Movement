class MovementTypesController < ApplicationController
  def index 
    render json: MovementType.all
  end
end
