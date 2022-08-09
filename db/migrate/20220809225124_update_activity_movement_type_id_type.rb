class UpdateActivityMovementTypeIdType < ActiveRecord::Migration[7.0]
  def change
    change_column(:activities, :movement_type_id, :bigint)
  end
end
