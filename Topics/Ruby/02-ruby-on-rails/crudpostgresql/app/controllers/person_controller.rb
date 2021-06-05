class PersonController < ApplicationController
  def get
    limit = Integer(ENV['API_PERSONS_LIMIT'])

    if params['limit'] != nil
      aux = Integer(params['limit'])

      if aux <= Integer(ENV['API_PERSONS_LIMIT'])
        limit = aux
      end
    end

    offset = params['offset'] != nil ? Integer(params[:offset]) : 0

    query = "select * from persons limit #{limit} offset #{offset}"

    persons = ActiveRecord::Base.connection.exec_query(query)

    render :json => persons
  end

  def post
    request_body = JSON.parse(request.body.read)

    request_body['name'] = request_body['name'].gsub("'", "")
    request_body['email'] = request_body['email'].gsub("'", "")
    request_body['cpf'] = request_body['cpf'].gsub("'", "")
    request_body['rg'] = request_body['rg'].gsub("'", "")

    query = "insert into persons (name, email, cpf, rg) values ('#{request_body['name']}', '#{request_body['email']}', '#{request_body['cpf']}', '#{request_body['rg']}')"

    ActiveRecord::Base.connection.execute(query)

    render :json => {message: 'Success'}
  end

  def delete
    id = Integer(params[:id])

    query = "delete from persons where id = #{id}"

    ActiveRecord::Base.connection.exec_query(query)

    render :json => {message: 'Success'}
  end
end
