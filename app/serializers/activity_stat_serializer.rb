class ActivityStatSerializer < ActiveModel::Serializer
  attributes :id, :activity_id, :time_seconds, :distance_miles, :exertion
end
