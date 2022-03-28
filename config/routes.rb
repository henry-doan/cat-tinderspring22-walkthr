Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :cats do
      put '/updateLikedCats', to: 'cats#updateLikedCats'
    end
    get '/cats/random', to: 'cats#randomCats'
  end

end
