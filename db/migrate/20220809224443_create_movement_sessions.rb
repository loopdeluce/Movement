class CreateMovementSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :movement_sessions do |t|
      t.string :title
      t.datetime :datetime_session_start

      t.timestamps
    end
  end
end
