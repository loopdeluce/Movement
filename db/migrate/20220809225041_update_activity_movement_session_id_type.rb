class UpdateActivityMovementSessionIdType < ActiveRecord::Migration[7.0]
  def change
    change_column(:activities, :movement_session_id, :bigint)
  end
end
