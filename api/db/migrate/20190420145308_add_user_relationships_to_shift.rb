class AddUserRelationshipsToShift < ActiveRecord::Migration[5.2]
  def change
    remove_column :shifts, :user_id, :integer
    add_reference :shifts, :manager
    add_reference :shifts, :employee
  end
end
