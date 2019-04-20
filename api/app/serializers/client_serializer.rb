class ClientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :subdomain, :logo

  has_many :users
	has_many :teams
	has_many :shifts
end
