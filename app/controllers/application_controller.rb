class ApplicationController < ActionController::API
  include ActionController::Cookies

  # before_action

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def record_not_found(exception)
    render json: { errors: ["#{exception.model} not found"]}, status: :not_found
  end

  def record_invalid(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
end
