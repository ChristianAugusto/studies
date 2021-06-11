require './app/utils/cpf.rb'

class PeopleController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    limit = self.class.index_limit(params)
    offset = params['offset'].to_i

    people = Person.all.limit(limit).offset(offset).order('id ASC')
    render json: people
  end

  def show
    render json: @person == nil ? {} : @person
  end

  def create
    @person = Person.new(person_params)

    if @person.save
      render json: @person
    else
      render json: person.errors
    end
  end

  def update
    @person.update(person_params)
    render json: @person
  end

  def destroy
    @person.destroy
    render json: {message: 'Success'}
  end

  # static
  def self.index_limit(params)
    api_people_limit = ENV['API_PEOPLE_LIMIT'].to_i

    return api_people_limit if (params['limit'] == nil)

    params_limit = params['limit'].to_i

    return api_people_limit if (params_limit > api_people_limit)

    return params_limit
  end

  private

  def person_params
    params.require(:person).permit(:name, :email, :cpf, :rg)
  end

  def set_user
    @person = Person.find(params[:id])
  end
end
