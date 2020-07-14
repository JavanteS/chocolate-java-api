class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :recipes

  # def initialize(recipe)
  #   @recipe = recipe
  # end


end
