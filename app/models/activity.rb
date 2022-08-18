class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :movement_session
  belongs_to :movement_type
  has_one :activity_stat, dependent: :destroy

  validates :user_id, presence: true
  validates :movement_session_id, presence: true
  validates :movement_type_id, presence: true
  validates :datetime_activity_finish, presence: true
  validates :is_stats_public, inclusion: {in: [true, false]}

end
