json.(@board, :id, :title, :user_id)

json.lists @board.lists do |json, list|
  json.(list, :title, :board_id, :id)
  json.cards list.cards do |json, card|
    json.(card, :title, :description, :list_id, :id)
  end
end