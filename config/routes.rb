Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'courses/index'
      post 'courses/create'
      get '/show/:id', to: 'courses#show'
      delete '/destroy/:id', to: 'courses#destroy'
      #get 'courses/episodes', to: 'courses#episodes'
    end
  end
  root 'pages#index'
  get 'episodes', to: 'api/v1/courses#episodes'
  #get 'courses', to: 'api/v1/courses#index'
  get '/*path' => 'pages#index' # route all requests that dont match existing routes to the index action
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
