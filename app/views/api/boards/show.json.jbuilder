json.(@board, :id, :title, :user_id)

json.lists @board.lists do |json, list|
  json.partial! list
  json.cards list.cards do |json, card|
    json.partial! card
  end
end