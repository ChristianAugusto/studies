Rails.application.routes.draw do
  get '/persons', to: 'person#get'
  get '/persons/:id', to: 'person#get_by_id'
  put '/persons/:id', to: 'person#update'
  post '/persons', to: 'person#post'
  delete '/persons/:id', to: 'person#delete'
end
