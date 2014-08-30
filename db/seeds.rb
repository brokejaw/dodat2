# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Board.create!(:title => "Welcome", :user_id => 1)
List.create!(:title => "The basics", :board_id => 1)
Card.create!(:title => "Im a card!", :description => "..and I have details!", :list_id => 1)
Card.create!(:title => "Cards have details", :description => "I'm a detail!", :list_id => 1)
Card.create!(:title => "You can hover over me", :description => "storage", :list_id => 1)
Card.create!(:title => "Click 'i' for details", :list_id => 1)
Card.create!(:title => "..or trashcan to delete", :list_id => 1)


List.create!(:title => "Advanced features", :board_id => 1)
Card.create!(:title => "Clean the house", :description => "upstairs", :list_id => 2)
Card.create!(:title => "Finish Painting", :description => "bathroom", :list_id => 2)
Card.create!(:title => "Organize Basement", :description => "storage", :list_id => 2)

List.create!(:title => "Blah blah", :board_id => 1)
Card.create!(:title => "Clean the house", :description => "upstairs", :list_id => 1)
Card.create!(:title => "Finish Painting", :description => "bathroom", :list_id => 2)
Card.create!(:title => "Organize Basement", :description => "storage", :list_id => 3)

Board.create!(:title => "Fitness", :user_id => 1)
List.create!(:title => "Monday", :board_id => 2)
Card.create!(:title => "Clean the house", :description => "upstairs", :list_id => 1)
Card.create!(:title => "Finish Painting", :description => "bathroom", :list_id => 2)
Card.create!(:title => "Organize Basement", :description => "storage", :list_id => 3)
List.create!(:title => "Wendesday", :board_id => 2)
List.create!(:title => "Friday", :board_id => 2) 
List.create!(:title => "Saturday", :board_id => 2)
Board.create!(:title => "Dinner Party Mashup", :user_id => 1)



List.create!(:title => "Monday", :board_id => 2)
List.create!(:title => "Wendesday", :board_id => 2)
List.create!(:title => "Friday", :board_id => 2) 
List.create!(:title => "Saturday", :board_id => 2) 

List.create!(:title => "To Do", :board_id => 3)
List.create!(:title => "Doing", :board_id => 3)
List.create!(:title => "Done", :board_id => 3) 
Card.create!(:title => "Clean the house", :description => "upstairs", :list_id => 1)
Card.create!(:title => "Finish Painting", :description => "bathroom", :list_id => 2)
Card.create!(:title => "Organize Basement", :description => "storage", :list_id => 3)
