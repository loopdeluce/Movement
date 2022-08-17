class ActivityWithStatsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movement_session_id, :movement_type_id, :description, :private_notes, :is_stats_public, :datetime_activity_finish, :movement_type

  has_one :activity_stat

  def movement_type
    self.object.movement_type.movement_type
  end

end