class AddRankToCards < ActiveRecord::Migration
  def change
    add_column :cards, :rank, :integer
  end
end
