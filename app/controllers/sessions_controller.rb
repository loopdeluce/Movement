class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]
  
  ########### /login
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  ########### /logout
  def destroy
    reset_session
    head :no_content
  end

end