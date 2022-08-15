class MovementType < ApplicationRecord
  has_many :activities
  has_many :activity_stats, through: :activities
  has_many :movement_sessions, through: :activities
  has_many :users, through: :activities

  validates :movement_type, presence: true
  validates :hex_color, length: { is: 7}

  def self.movement_types_by_category
    categories = MovementType.all.map{|movement| movement.movement_type_category.to_sym}.uniq()
    category_hash = categories.to_h{ |category| [category, []]}
    empty_hash = {}
    mapped_movement_types = MovementType.all.reduce do |empty_hash, movement|
      category = movement[:movement_type_category]
      category_symbol = category.to_sym
      category_hash[category_symbol] << movement.movement_type
      category_hash
    end

    sorted_arr = mapped_movement_types.map do |key, value|
      values_sorted = value.sort{|a, b| a.downcase <=> b.downcase}
      [key, values_sorted]
    end
  end

end


