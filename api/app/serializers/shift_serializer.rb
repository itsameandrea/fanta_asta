class ShiftSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :start_time, :end_time
end
