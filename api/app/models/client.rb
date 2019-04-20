class Client < ApplicationRecord
	has_many :users
	has_many :teams
	has_many :shifts
end
