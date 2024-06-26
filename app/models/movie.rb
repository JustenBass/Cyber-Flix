class Movie < ApplicationRecord
    has_many :connections
    has_many :actors, through: :connections
    has_many :reviews
    has_many :archives
    has_many :users, through: :archives
end
