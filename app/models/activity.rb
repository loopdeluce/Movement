class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :movement_session
  belongs_to :movement_type
  has_one :activity_stat

  validates :user_id, presence: true
  validates :movement_session_id, presence: true
  validates :movement_type_id, presence: true
  validates :is_stats_public, presence: true
  validates :datetime_activity_finish, presence: true
  validates_numericality_of :is_stats_public, :only_integer => true, :in => 0...1
end
