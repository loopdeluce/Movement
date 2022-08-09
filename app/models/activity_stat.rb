class ActivityStat < ApplicationRecord
  belongs_to :activity

  validates :activity_id, presence: true
  validates :time_seconds, numericality: { only_integer: true }
  validates :distance_miles, :numericality => true, :allow_nil => true
  validates_numericality_of :exertion, :only_integer => true, :in => 1...10, :allow_nil => true
end
