class Board < ActiveRecord::Base
  validates :title, presence: true
  validates :user_id, presence: true
  
  has_many :lists, dependent: :destroy
  has_many :cards, through: :lists
end
