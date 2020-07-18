class Item < ApplicationRecord
    belongs_to :category
    validates :title, presence: true
    validates :title, uniqueness: { case_sensitive: false }
end
