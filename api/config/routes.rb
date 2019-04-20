Rails.application.routes.draw do
  # get 'signup/create'
	namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :users, only: [:create]
      post '/users/login' => 'user_token#create'
    	resources :shifts
    	resources :teams   
     # routes go here
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
