class MovementSession < ApplicationRecord
  has_many :activities
  has_many :movement_types, through: :activities
  has_many :activity_stats, through: :activities
  has_many :users, through: :activities

  validates :datetime_session_start, presence: true
  validates :title, presence: true
end
