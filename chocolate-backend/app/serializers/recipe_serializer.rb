class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :difficulty_level, :img_url
  belongs_to :category

  def initialize(recipe)
    @recipe = recipe
  end

  def to_serialized_json
    options = {
      include: {
        category: [:name]
      },
      except: [:updated_at]
    }
    @recipe.to_json(options)
  end
end
