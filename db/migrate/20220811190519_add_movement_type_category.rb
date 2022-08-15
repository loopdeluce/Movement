class AddMovementTypeCategory < ActiveRecord::Migration[7.0]
  def change
    add_column :movement_types, :movement_type_category, :string
  end
end
