class User < ApplicationRecord
  has_many :activities
  has_many :movement_sessions, through: :activities
  has_many :activity_stats, through: :activities
  has_many :movement_types, through: :activities


  validates :user_type, presence: true
  validates :password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_secure_password
end
