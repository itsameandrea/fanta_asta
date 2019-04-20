class Team < ApplicationRecord
	has_many :shifts
	belongs_to :client, optional: true

	before_create :set_client

	def set_client
		self.client = Current.client
	end
end
