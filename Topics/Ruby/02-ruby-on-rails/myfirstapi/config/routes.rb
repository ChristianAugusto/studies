Rails.application.routes.draw do
  get '/first', to: 'first#get'
  post '/first', to: 'first#post'
end
