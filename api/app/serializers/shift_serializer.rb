class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :start_time, :end_time

  belongs_to :manager
  belongs_to :employee
  belongs_to :team
  belongs_to :client
end
