require 'rails_helper'

RSpec.describe Person, type: :model do
  it 'Person instance test' do
    expect(Person.new).to be_present
  end

  it 'Person properties test' do
    person = Person.new

    expect(person).to respond_to(:name)
    expect(person).to respond_to(:email)
    expect(person).to respond_to(:cpf)
    expect(person).to respond_to(:rg)
  end
end
