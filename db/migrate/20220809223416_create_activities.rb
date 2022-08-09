class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.integer :user_id
      t.integer :session_id
      t.integer :movement_type_id
      t.string :description
      t.string :private_notes
      t.boolean :is_stats_public
      t.datetime :datetime_activity_finish

      t.timestamps
    end
  end
end
