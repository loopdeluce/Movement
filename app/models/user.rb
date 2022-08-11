class User < ApplicationRecord
  has_many :activities
  has_many :movement_sessions, through: :activities
  has_many :activity_stats, through: :activities
  has_many :movement_types, through: :activities


  validates :email, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_secure_password
end
