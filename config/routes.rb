Rails.application.routes.draw do
  get 'mans/index'
  root to: 'mans#index'
end
