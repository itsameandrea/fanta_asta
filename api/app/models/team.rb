class Team < ApplicationRecord
	has_many :shifts
	belongs_to :client
end
