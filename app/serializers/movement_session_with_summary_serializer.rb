class MovementSessionWithSummarySerializer < ActiveModel::Serializer
  attributes :id, :title, :datetime_session_start, :total_activities, :total_time_seconds, :avg_exertion

  has_many :activities, serializer: ActivityWithStatsSerializer

  def total_activities
    self.object.activities.length
  end

  def total_time_seconds
    activity_lengths_seconds = self.object.activities.map {|activity| activity.activity_stat.time_seconds}
    total_seconds = activity_lengths_seconds.sum
  end

  def avg_exertion
    activity_time_exertions = self.object.activities.map {|activity| activity.activity_stat.exertion * activity.activity_stat.time_seconds}
    activity_times = self.object.activities.map {|activity| activity.activity_stat.time_seconds}
    avg_exertion = activity_time_exertions.sum / activity_times.sum
  end
end
