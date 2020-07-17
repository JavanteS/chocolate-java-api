class ItemsController < ApplicationController


    def index
        recipes = Recipe.all
        render json: recipes #RecipeSerializer.new(recipes).to_serialized_json
    end

    def create
        recipe = Recipe.create(title: params[:title], product_details: params[:product_details], price: params[:price], quanity: params[:quanity], img_url: params[:img_url])
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
         render json: recipe #RecipeSerializer.new(recipe).to_serialized_json    
    end

    def edit
    end

    def update
        recipe = Recipe.find_by(id: params[:id])
        recipe.update(recipe_params)
        render json: recipe
    end


    # private

    # def recipe_params
    #     params.require(:recipe).permit(:title, :instructions, :difficulty_level,:img_url)
    # end

    




end
