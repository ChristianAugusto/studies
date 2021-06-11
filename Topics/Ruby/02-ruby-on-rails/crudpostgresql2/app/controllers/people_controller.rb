require './app/utils/cpf.rb'
require './app/utils/custom_exceptions.rb'

class PeopleController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    limit = self.class.index_limit(params)
    offset = self.class.index_offset(params)

    people = Person.all.limit(limit).offset(offset).order('id ASC')
    render json: people
  end

  def show
    render json: @person == nil ? {} : @person
  end

  def create
    @person = Person.new(person_params)

    unless CpfUtils.cpf_valid?(@person.cpf)
      raise InvalidCpfException.new
    end

    if @person.save
      render json: @person
    else
      render json: person.errors
    end
  end

  def update
    if (person_params['cpf'] != nil and not CpfUtils.cpf_valid?(person_params['cpf']))
      raise InvalidCpfException.new
    end

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

    if params['limit'] == nil
      return api_people_limit
    end

    params_limit = params['limit'].to_i

    if params_limit > api_people_limit
      return api_people_limit
    end

    return params_limit
  end

  def self.index_offset(params)
    if params['offset'] == nil
      return 0
    end

    return params['offset'].to_i
  end

  private

  def person_params
    params.require(:person).permit(:name, :email, :cpf, :rg)
  end

  def set_user
    @person = Person.find(params[:id])
  end
end
