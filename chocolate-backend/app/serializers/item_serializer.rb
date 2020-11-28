class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :product_details, :price, :quanity, :img_url, :category_id
  belongs_to :category

end
