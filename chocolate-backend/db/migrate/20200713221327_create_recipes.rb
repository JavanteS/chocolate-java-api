class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :product_details
      t.integer :price
      t.integer :quanity
      t.string :img_url
      t.integer :category_id

      t.timestamps
    end
  end
end
