class Card < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :list
  has_one :board, through: :list
end
