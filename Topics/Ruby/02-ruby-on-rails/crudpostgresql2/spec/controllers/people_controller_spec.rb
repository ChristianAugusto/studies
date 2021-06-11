require 'rails_helper'
require './app/utils/custom_exceptions.rb'

RSpec.describe PeopleController, type: :controller do
  describe 'GET /people' do
    it 'validate limit less than env' do
      expect(
        PeopleController.index_limit({'limit' => "#{ENV['API_PEOPLE_LIMIT'].to_i() - 1}"})
      ).to eq(ENV['API_PEOPLE_LIMIT'].to_i() - 1)
    end

    it 'validate limit equal than env' do
      expect(
        PeopleController.index_limit({'limit' => ENV['API_PEOPLE_LIMIT']})
      ).to eq(ENV['API_PEOPLE_LIMIT'].to_i())
    end

    it 'validate limit greater than env' do
      expect(
        PeopleController.index_limit({'limit' => "#{ENV['API_PEOPLE_LIMIT'].to_i() + 1}"})
      ).to eq(ENV['API_PEOPLE_LIMIT'].to_i())
    end

    it 'validate non existing offset' do
      expect(
        PeopleController.index_offset({})
      ).to eq(0)
    end

    it 'validate existing offset' do
      expect(
        PeopleController.index_offset({'offset' => '2'})
      ).to eq(2)
    end

    it 'returns success status and empty list' do
      get(:index, params: {limit: ENV['API_PEOPLE_LIMIT'], offset: '0'})

      expect(response).to be_successful
      expect(JSON.parse(response.body).size).to eq(0)
    end

    it 'returns success status and one person' do
      person = Person.create(name: 'Tiago Nicolas da Rocha', email: 'evelynvalentinaluciasantos-83@gmx.com', cpf: '70101273525', rg: '10.880.136-6')

      get(:index, params: {limit: ENV['API_PEOPLE_LIMIT'], offset: '0'})

      expect(response).to be_successful
      expect(JSON.parse(response.body).size).to eq(1)
    end
  end

  describe 'GET /people/:id' do
    it 'existing id' do
      person = Person.create(name: 'Tiago Nicolas da Rocha', email: 'evelynvalentinaluciasantos-83@gmx.com', cpf: '70101273525', rg: '10.880.136-6')

      get(:show, params: {id: "#{person.id()}"})

      expect(response).to be_successful
    end

    it 'non existing id' do
      expect {
        get :show, params: {id: '1'}
      }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end

  describe 'POST /people' do
    context 'valid request body' do
      it 'response sucess status' do
        person = Person.new(name: 'Tiago Nicolas da Rocha', email: 'evelynvalentinaluciasantos-83@gmx.com', cpf: '70101273525', rg: '10.880.136-6')

        post(:create, params: {person: {name: person[:name], email: person[:email], cpf: person[:cpf], rg: person[:rg]}})

        expect(response).to be_successful
      end
    end

    context 'invalid request body' do
      it 'invalid cpf' do
        person = Person.new(name: 'Kaique Ricardo da Paz', email: 'kaique.ricardo.paz@gmail.com', cpf: '88343470053', rg: '49.502.455-7')

        expect {
          post :create, params: {person: {name: person[:name], email: person[:email], cpf: person[:cpf], rg: person[:rg]}}
        }.to raise_exception(InvalidCpfException)
      end

      it 'duplicated cpf' do
        person1 = Person.create(name: 'Tiago Nicolas da Rocha', email: 'evelynvalentinaluciasantos-83@gmx.com', cpf: '70101273525', rg: '10.880.136-6')

        person2 = Person.new(name: 'Kaique Ricardo da Paz', email: 'kaique.ricardo.paz@gmail.com', cpf: '70101273525', rg: '49.502.455-7')

        expect {
          post :create, params: {person: {name: person2[:name], email: person2[:email], cpf: person2[:cpf], rg: person2[:rg]}}
        }.to raise_exception(ActiveRecord::RecordNotUnique)
      end
    end
  end

  describe 'PUT /people/:id' do
    context 'valid request body' do
      it 'response sucess status' do
        person1 = Person.create(name: 'Tiago Nicolas da Rocha', email: 'evelynvalentinaluciasantos-83@gmx.com', cpf: '70101273525', rg: '10.880.136-6')

        new_name = 'Teste 123'

        put(:update, params: {person: {name: new_name}, id: person1.id()})

        expect(response).to be_successful

        updated_person = JSON.parse(response.body)
        expect(updated_person['name']).to eq(new_name)
      end
    end

    context 'invalid request body' do
      it 'invalid cpf' do
        person1 = Person.create(name: 'Tiago Nicolas da Rocha', email: 'evelynvalentinaluciasantos-83@gmx.com', cpf: '70101273525', rg: '10.880.136-6')

        new_cpf = '88343470053'

        expect {
          put :update, params: {person: {cpf: new_cpf}, id: person1.id()}
        }.to raise_exception(InvalidCpfException)
      end
    end
  end

  describe 'DELETE /people/:id' do
    it 'existing id' do
      person = Person.create(name: 'Tiago Nicolas da Rocha', email: 'evelynvalentinaluciasantos-83@gmx.com', cpf: '70101273525', rg: '10.880.136-6')

      delete(:destroy, params: {id: "#{person.id()}"})

      expect(response).to be_successful
    end

    it 'non existing id' do
      expect {
        delete :destroy, params: {id: '1'}
      }.to raise_exception(ActiveRecord::RecordNotFound)
    end
  end
end
