Rails.application.routes.draw do
  resources :movies, only: [ :index ]
  resources :actors, only: [ :index ]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
