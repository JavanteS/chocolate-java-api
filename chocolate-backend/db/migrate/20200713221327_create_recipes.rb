class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :instructions
      t.string :difficulty_level
      t.string :img_url
      t.integer :category_id

      t.timestamps
    end
  end
end
