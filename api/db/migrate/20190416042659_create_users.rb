class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
    	t.string :name, nil: false
      t.string :email, nil: false
      t.references :client
      t.string :password_digest, nil: false

      t.timestamps
    end
  end
end
