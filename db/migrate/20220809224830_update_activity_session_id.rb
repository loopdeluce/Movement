class UpdateActivitySessionId < ActiveRecord::Migration[7.0]
  def change
    rename_column :activities, :session_id, :movement_session_id
  end
end
