require './app/utils/cpf.rb'

class PersonController < ApplicationController
  before_action :set_user, only: [:get_by_id, :update, :delete]

  # normalmente esse metodo chamace index
  def get
    limit =  params['limit'].to_i <= ENV['API_PEOPLE_LIMIT'].to_i ? params['limit'].to_i : ENV['API_PEOPLE_LIMIT'].to_i
    offset = params['offset'] != nil ? params[:offset].to_i : 0
    people = Person.all.limit(limit).offset(offset).order('id ASC')
    render json: people
  end

  # normalmente esse metodo chamace show
  def get_by_id
    render json: @user == nil ? {} : @user
  end

  # normalmente esse metodo chamace create
  def post
    @person = Person.new(person_params)

    unless CpfUtils.cpf_valid?(@person.cpf)
      raise Exception.new 'cpf not valid'
    end

    if @person.save
      render json: @person
    else
      render json: person.errors
    end
  end

  def update
    @user.update(person_params)
    render json: @user
  end

  # normalmente esse metodo chamace delete
  def delete
    @user.destroy
    render json: {message: 'Success'}
  end

  private

  def person_params
    params.require(:person).permit(:name, :email, :cpf, :rg)
  end

  def set_user
    @user = Person.find(params[:id])
  end
end
