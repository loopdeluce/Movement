class UsersController < ApplicationController
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_comfirmation, :first_name, :last_name)
  end
end