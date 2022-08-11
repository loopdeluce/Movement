Rails.application.routes.draw do
  resources :movement_sessions
  resources :activity_stats
  resources :activities
  resources :users, only: [:create]
  resources :movement_types, only: %i[index]

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

