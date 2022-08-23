Rails.application.routes.draw do
  resources :movement_sessions, only: [:index, :create, :update, :destroy]
  # resources :activity_stats
  resources :activities, only: [:index, :destroy]
  resources :users, only: [:create]
  resources :movement_types, only: [:index]

  post "/movement_sessions/:movement_session_id/activities", to: "activities#create"
  get "/users/:id/movement_sessions", to: "movement_sessions#user_movement_sessions_index"
  get "/users/:id/activities/:uom/:year", to: "activities#summary"

    # namespace :api do
      # get "/cookie_click", to: "sessions#click"
      # resources :recipes, only: [:index, :create]
      # post "/signup", to: "users#create"
      # get "/me", to: "users#show"
      # post "/login", to: "sessions#create"
      # delete "/logout", to: "sessions#destroy"
    # end

     #Authentication routes
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

