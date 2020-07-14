class RecipesController < ApplicationController


    def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).to_serialized_json
    end

    def create
        recipe = Recipe.create(recipe_params)
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: RecipeSerializer.new(recipe).to_serialized_json    
    end

    def edit
    end

    def update
        recipe = Recipe.find_by(id: params[:id])
        recipe.update(recipe_params)
        render json: recipe
    end


    private

    def recipe_params
        params.require(:recipe).permit(:title, :instructions, :difficulty_level,:img_url, :category_id)
    end

    




end
