class CreateMovementTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :movement_types do |t|
      t.string :movement_type
      t.string :icon_image
      t.string :hex_color

      t.timestamps
    end
  end
end
