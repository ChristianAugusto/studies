Rails.application.routes.draw do
  get '/persons', to: 'person#get'
  post '/persons', to: 'person#post'
  delete '/persons/:id', to: 'person#delete'
end
