class Changes < ActiveRecord::Migration
  def change
    add_column :boards, :user_id, :integer
    remove_column :lists, :user_id
  end
end
