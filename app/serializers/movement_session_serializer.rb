class MovementSessionSerializer < ActiveModel::Serializer
  attributes :id, :title, :datetime_session_start

  has_many :activities
end
