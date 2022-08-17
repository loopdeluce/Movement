class MovementTypeSerializer < ActiveModel::Serializer
  attributes :id, :movement_type, :hex_color, :movement_type_category
end
