class AddClientToTeams < ActiveRecord::Migration[5.2]
  def change
    add_reference :teams, :client, index: true
  end
end
