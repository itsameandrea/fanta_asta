class User < ApplicationRecord
	has_secure_password
	validates :email, uniqueness: { case_sensitive: false }, presence: true
	
	has_many :shifts
	has_many :ownerships
	has_many :clients, through: :ownerships
end
