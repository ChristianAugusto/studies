require 'rails_helper'
require './app/utils/cpf.rb'

RSpec.describe do
  context 'CpfUtils.cpf_valid?' do
    it 'true cases' do
      expect(CpfUtils.cpf_valid?('13964322059')).to eq(true)
      expect(CpfUtils.cpf_valid?('93429539056')).to eq(true)
      expect(CpfUtils.cpf_valid?('88230379050')).to eq(true)
      expect(CpfUtils.cpf_valid?('42679036034')).to eq(true)
      expect(CpfUtils.cpf_valid?('88343470052')).to eq(true)
      expect(CpfUtils.cpf_valid?('52998224725')).to eq(true)
    end

    it 'false cases' do
      for deny_cpf in CpfUtils.DENY_LIST
        expect(CpfUtils.cpf_valid?(deny_cpf)).to eq(false)
      end

      expect(CpfUtils.cpf_valid?('12345678912')).to eq(false)
      expect(CpfUtils.cpf_valid?('88343470053')).to eq(false)
      expect(CpfUtils.cpf_valid?('11111111112')).to eq(false)
    end
  end
end
