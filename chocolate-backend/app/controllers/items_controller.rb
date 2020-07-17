class ItemsController < ApplicationController


    def index
        items = Item.all
        render json: items #RecipeSerializer.new(recipes).to_serialized_json
    end

    def create
        item = Item.create(title: params[:title], product_details: params[:product_details], price: params[:price], quanity: params[:quanity], img_url: params[:img_url])
    end

    def show
        item = Item.find_by(id: params[:id])
         render json: item #RecipeSerializer.new(recipe).to_serialized_json    
    end

    def edit
    end

    def update
        item = Item.find_by(id: params[:id])
        item.update(title: params[:title], product_details: params[:product_details], price: params[:price], quanity: params[:quanity], img_url: params[:img_url])
        render json: item
    end


    # private

    # def item_params
    #     params.require(:item).permit(:title, :instructions, :difficulty_level,:img_url)
    # end

    




end
