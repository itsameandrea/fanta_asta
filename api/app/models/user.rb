class User < ApplicationRecord
	
	thread_mattr_accessor :current
	
	has_secure_password
	validates :email, uniqueness: { case_sensitive: false }, presence: true

	has_many :created_shifts, class_name: "Shift", foreign_key: "manager_id"
	has_many :assigned_shifts, class_name: "Shift", foreign_key: "employee_id"

	belongs_to :client, optional: true
end
