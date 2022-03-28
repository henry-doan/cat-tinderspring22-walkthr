class AddLikedCatsToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :liked_cats, :text
  end
end
