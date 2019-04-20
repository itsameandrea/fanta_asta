class AddClientToShifts < ActiveRecord::Migration[5.2]
  def change
    add_reference :shifts, :client, index: true
  end
end
