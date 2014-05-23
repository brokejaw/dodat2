Dodat2::Application.routes.draw do
    
  namespace :api do
    resources :boards, except: [:new, :edit] do
      resources :lists, only: [:index, :show, :create, :update, :destroy]
    end
    
    resources :lists, only: [:show, :update, :destroy] do
      resources :cards, only: [:create, :index]
    end
    
    resources :cards, only: [:show, :update, :destroy]
  end
  
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
end
