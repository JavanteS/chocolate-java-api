class ItemsController < ApplicationController


    def index
        items = Item.all
        render json: items #RecipeSerializer.new(recipes).to_serialized_json
    end

    def create
        item = Item.create(item_params)
    end

    def show
        item = Item.find_by(id: params[:id])
         render json: item #RecipeSerializer.new(recipe).to_serialized_json    
    end

    def edit
    end

    def update
        item = Item.find_by(id: params[:id])
        item.update(item_params)
        render json: item
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.destroy
    end


    private

    def item_params
        params.require(:item).permit(:title, :product_details,:price, :quanity, :img_url, :category_id)
    end

    




end
