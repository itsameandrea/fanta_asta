class CreateShifts < ActiveRecord::Migration[5.2]
  def change
  	create_table :teams do |t|
  		t.string :name
  		t.string :color
  	end

    create_table :shifts do |t|
    	t.references :user
    	t.references :team
    	t.date :date
    	t.string :start_time
    	t.string :end_time
      t.timestamps
    end
  end
end
