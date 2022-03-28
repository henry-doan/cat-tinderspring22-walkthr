class Cat < ApplicationRecord
  belongs_to :user
  validates :name, :breed, :color, :avatar, presence: true

  
end
