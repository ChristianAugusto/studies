class PersonController < ApplicationController
  def get
    limit = Integer(ENV['API_PEOPLE_LIMIT'])

    if params['limit'] != nil
      aux = Integer(params['limit'])

      if aux <= Integer(ENV['API_PEOPLE_LIMIT'])
        limit = aux
      end
    end

    offset = params['offset'] != nil ? Integer(params[:offset]) : 0

    people = Person.all.limit(limit).offset(offset).order('id ASC')

    render :json => people
  end

  def get_by_id
    id = Integer(params[:id])

    user = Person.find_by(id: id)

    render :json => user == nil ? {} : user
  end

  def update
    id = Integer(params[:id])

    user = Person.find_by(id: id)

    request_body = JSON.parse(request.body.read)

    if request_body['name'] != nil
      user.name = request_body['name']
    end

    if request_body['email'] != nil
      user.email = request_body['email']
    end

    if request_body['cpf'] != nil
      user.cpf = request_body['cpf']
    end

    if request_body['rg'] != nil
      user.rg = request_body['rg']
    end

    user.save

    render :json => user
  end

  def post
    request_body = JSON.parse(request.body.read)

    request_body['name'] = request_body['name'].gsub("'", "")
    request_body['email'] = request_body['email'].gsub("'", "")
    request_body['cpf'] = request_body['cpf'].gsub("'", "")
    request_body['rg'] = request_body['rg'].gsub("'", "")

    person = Person.new
    person.name = request_body['name']
    person.email = request_body['email']
    person.cpf = request_body['cpf']
    person.rg = request_body['rg']

    person.save

    render :json => {message: 'Success'}
  end

  def delete
    id = Integer(params[:id])

    user = Person.find_by(id: id)
    user.destroy

    render :json => {message: 'Success'}
  end
end
