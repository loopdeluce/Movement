class MovementTypesController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index 
    render json: MovementType.movement_types_by_category
  end
end
