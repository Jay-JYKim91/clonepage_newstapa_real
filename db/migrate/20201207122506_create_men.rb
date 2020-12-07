class CreateMen < ActiveRecord::Migration[6.0]
  def change
    create_table :men do |t|
      t.string :name
      t.string :category
      t.string :year
      t.string :refer_url
      t.string :img
      t.text :past
      t.text :school_career
      t.text :main_career
      t.text :award
      t.string :back_color

      t.timestamps
    end
  end
end
