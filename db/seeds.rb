# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Board.create!(:title => "Home", :user_id => 1)
Board.create!(:title => "Work", :user_id => 1)
Board.create!(:title => "School", :user_id => 1)
List.create!(:title => "To Do", :board_id => 1)
List.create!(:title => "Doing", :board_id => 1)
List.create!(:title => "Done", :board_id => 1) 
List.create!(:title => "To Do", :board_id => 2)
List.create!(:title => "Doing", :board_id => 2)
List.create!(:title => "Done", :board_id => 2) 
List.create!(:title => "To Do", :board_id => 3)
List.create!(:title => "Doing", :board_id => 3)
List.create!(:title => "Done", :board_id => 3) 
Card.create!(:title => "Clean the house", :description => "upstairs", :list_id => 1)
Card.create!(:title => "Finish Painting", :description => "bathroom", :list_id => 2)
Card.create!(:title => "Organize Basement", :description => "storage", :list_id => 3)
