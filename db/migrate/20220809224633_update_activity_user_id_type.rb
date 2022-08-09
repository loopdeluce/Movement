class UpdateActivityUserIdType < ActiveRecord::Migration[7.0]
  def change
    change_column(:activities, :user_id, :bigint)
  end
end
