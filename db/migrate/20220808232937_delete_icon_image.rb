class DeleteIconImage < ActiveRecord::Migration[7.0]
  def change
    remove_column :movement_types, :icon_image
  end
end
