class Shift < ApplicationRecord
	belongs_to :manager, class_name: "User", optional: true
	belongs_to :employee, class_name: "User", optional: true
	belongs_to :client, optional: true
	belongs_to :team, optional: true

	before_save :assign_manager, :assign_client

	def assign_manager
		self.manager = Current.user
	end

	def assign_client
		self.client = Current.client
	end
end
