class Reply < ApplicationRecord
    has_many :comments
    belongs_to :user
    belongs_to :review

    validates :reply, presence: true
end
