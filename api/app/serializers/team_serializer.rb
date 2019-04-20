class TeamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :color

  belongs_to :client
end
