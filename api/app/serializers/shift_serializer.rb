class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  
  attribute(:manager) { |o| o.manager_data }
  attributes :date, :start_time, :end_time

  # attribute :team do |shift|
  #   TeamSerializer.new(shift.team).serializable_hash
  # end

  belongs_to :manager, record_type: :user
  belongs_to :employee, record_type: :user
  belongs_to :team
  belongs_to :client
end
