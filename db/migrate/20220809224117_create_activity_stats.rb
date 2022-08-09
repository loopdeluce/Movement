class CreateActivityStats < ActiveRecord::Migration[7.0]
  def change
    create_table :activity_stats do |t|
      t.bigint :activity_id
      t.bigint :time_seconds
      t.float :distance_miles
      t.integer :exertion

      t.timestamps
    end
  end
end
