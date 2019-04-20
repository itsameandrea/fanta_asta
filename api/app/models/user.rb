class User < ApplicationRecord
	has_secure_password
	validates :email, uniqueness: { case_sensitive: false }, presence: true

	has_many :shifts
	belongs_to :client, optional: true
end
