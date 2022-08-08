class SessionsController < ApplicationController
  def click
    session[:click] ||=0
    session[:click] += 1

  end
end