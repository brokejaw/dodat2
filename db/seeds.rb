# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
#Board 1
Board.create!(:title => "Welcome", :user_id => 1)
#List 1
List.create!(:title => "The basics", :board_id => 1)
Card.create!(:title => "Im a card!", :description => "..and I have details!", :list_id => 1)
Card.create!(:title => "Cards have details", :description => "I'm a detail!", :list_id => 1)
Card.create!(:title => "You can hover over me", :description => "storage", :list_id => 1)
Card.create!(:title => "Click 'i' for details", :list_id => 1)
Card.create!(:title => "..or trashcan to delete", :list_id => 1)

#list 2
List.create!(:title => "Additional features", :board_id => 1)
Card.create!(:title => "Cards are sortable", :description => "upstairs", :list_id => 2)
Card.create!(:title => "Drag me up/down", :description => "bathroom", :list_id => 2)
Card.create!(:title => "So are lists", :description => "storage", :list_id => 2)

#list 3
List.create!(:title => "This can be anything", :board_id => 1)
Card.create!(:title => "Write down ideas", :description => "upstairs", :list_id => 3)
Card.create!(:title => "..or tasks", :description => "bathroom", :list_id => 3)
Card.create!(:title => "Stay organized", :description => "storage", :list_id => 3)

#board 2
Board.create!(:title => "Fitness", :user_id => 1)
#list 4
List.create!(:title => "Monday", :board_id => 2)
Card.create!(:title => "200m warmup", :description => "upstairs", :list_id => 4)
Card.create!(:title => "Pushups 3x35", :description => "bathroom", :list_id => 4)
Card.create!(:title => "Situps 3x40", :description => "storage", :list_id => 4)
Card.create!(:title => "Swim, 30min", :description => "storage", :list_id => 4)

#list 5
List.create!(:title => "Wendesday", :board_id => 2)
Card.create!(:title => "Pistol-squats, 10", :description => "upstairs", :list_id => 5)
Card.create!(:title => "Deadlifts, 8x130lb", :description => "bathroom", :list_id => 5)
Card.create!(:title => "Dynamic Squats", :description => "storage", :list_id => 5)
Card.create!(:title => "Lunges, 30", :description => "storage", :list_id => 5)

#list 6
List.create!(:title => "Friday", :board_id => 2) 
Card.create!(:title => "1.5 miles, 7:45 pace", :description => "upstairs", :list_id => 6)
Card.create!(:title => "Pushups, 6x15", :description => "bathroom", :list_id => 6)
Card.create!(:title => "Planks, 4 x 1 min", :description => "storage", :list_id => 6)
Card.create!(:title => "Airdyne, 10x1 min", :description => "storage", :list_id => 6)
List.create!(:title => "Saturday", :board_id => 2)

#board 3
Board.create!(:title => "Dinner Party Mashup", :user_id => 1)
#list 7
List.create!(:title => "Drinkers", :board_id => 3)
Card.create!(:title => "C. Bukowski", :description => "upstairs", :list_id => 7)
Card.create!(:title => "C. Hitchens", :description => "bathroom", :list_id => 7)
Card.create!(:title => "J. Cheever", :description => "storage", :list_id => 7)
Card.create!(:title => "D. Parker", :description => "storage", :list_id => 7)
Card.create!(:title => "J. Rhys", :description => "storage", :list_id => 7)

#list 8
List.create!(:title => "Fighters", :board_id => 3)
Card.create!(:title => "E. Hemingway", :list_id => 8)
Card.create!(:title => "H.S. Thompson", :list_id => 8)

#list 9
List.create!(:title => "Space-time", :board_id => 3) 
Card.create!(:title => "U. Le Guin", :description => "upstairs", :list_id => 9)
Card.create!(:title => "F. Herbert", :description => "bathroom", :list_id => 9)
Card.create!(:title => "R. Bradbury", :description => "storage", :list_id => 9)
Card.create!(:title => "R. Heinlein", :description => "storage", :list_id => 9)
Card.create!(:title => "A. Clarke", :description => "storage", :list_id => 9)
Card.create!(:title => "D. Adams", :description => "storage", :list_id => 9)

#list 10
List.create!(:title => "Poets", :board_id => 3)
Card.create!(:title => "P. Larkin", :description => "this be the verse", :list_id => 10)
Card.create!(:title => "P. Neruda", :list_id => 10)
Card.create!(:title => "E. Dickinson", :list_id => 10)

