class MovementType < ApplicationRecord
  has_many :activities
  has_many :activity_stats, through: :activities
  has_many :movement_sessions, through: :activities
  has_many :users, through: :activities

  validates :movement_type, presence: true
  validates :hex_color, length: { is: 7}
end
