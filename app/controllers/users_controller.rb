class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  ###### /signup
  def create
    if params[:password_confirmation] == params[:password]
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Confirmation password does not match password"] }, status: :not_acceptable
    end
  end

  ######## /me
  def show
    user = User.find_by!(id: session[:user_id])
    render json: user
  end


  private

  def user_params
    params.permit(:email, :password, :password_comfirmation, :first_name, :last_name)
  end
end
