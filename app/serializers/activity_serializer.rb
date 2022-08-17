class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :movement_session_id, :movement_type_id, :description, :private_notes, :is_stats_public, :datetime_activity_finish
end
