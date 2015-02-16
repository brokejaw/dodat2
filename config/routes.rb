Dodat2::Application.routes.draw do
  root :to => "site#down"
  # root :to => "site#root"
    
  namespace :api, :defaults => { :format => :json } do
    resources :boards, except: [:new, :edit] do
      resources :lists, only: [:index, :show, :create, :update, :destroy]
    end
    
    resources :lists, only: [:show, :update, :destroy] do
      resources :cards, only: [:create, :index, :destroy]
    end
    
    resources :cards, only: [:show, :update, :destroy]
  end
  
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
end
