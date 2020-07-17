class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :items

  # def initialize(recipe)
  #   @recipe = recipe
  # end


end
