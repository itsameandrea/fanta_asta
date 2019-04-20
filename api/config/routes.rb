Rails.application.routes.draw do
	namespace :api, defaults: {format: 'json'} do
    namespace :v1 do

      resources :users, only: [:create]
      post '/users/login' => 'user_token#create'
      get '/users/me' => 'users#me'

      resources :shifts
      resources :teams
      resources :clients
    end
  end
end
