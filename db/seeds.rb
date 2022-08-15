# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "faker"

puts "Seeding movement types..."

hike = MovementType.create(movement_type: 'Hike', hex_color: '#116530', movement_type_category: "Foot Sports")
run = MovementType.create(movement_type: 'Run', hex_color: '#116530', movement_type_category: "Foot Sports")
trailRun = MovementType.create(movement_type: 'Trail Run', hex_color: '#116530', movement_type_category: "Foot Sports")
walk = MovementType.create(movement_type: 'Walk', hex_color: '#116530', movement_type_category: "Foot Sports")

recumbentBike  = MovementType.create(movement_type: 'Recumbent Bike Ride', hex_color: '#116530', movement_type_category: "Cycle Sports")
bike = MovementType.create(movement_type: 'Bike Ride', hex_color: '#116530', movement_type_category: "Cycle Sports")
mountainBike = MovementType.create(movement_type: 'Mountain Bike Ride', hex_color: '#116530', movement_type_category: "Cycle Sports")
gravelBike = MovementType.create(movement_type: 'Gravel Bike Ride', hex_color: '#116530', movement_type_category: "Cycle Sports")
tandemBike = MovementType.create(movement_type: 'Tandem Bike Ride', hex_color: '#116530', movement_type_category: "Cycle Sports")
eBike = MovementType.create(movement_type: 'eBike Ride', hex_color: '#116530', movement_type_category: "Cycle Sports")

canoe  = MovementType.create(movement_type: 'Canoe', hex_color: '#116530', movement_type_category: "Water Sports")
kayak = MovementType.create(movement_type: 'Kayak', hex_color: '#116530', movement_type_category: "Water Sports")
kitesurfSession = MovementType.create(movement_type: 'Kitesurf Session', hex_color: '#116530', movement_type_category: "Water Sports")
windsurfSession = MovementType.create(movement_type: 'Windsurf Session', hex_color: '#116530', movement_type_category: "Water Sports")
standUpPaddle = MovementType.create(movement_type: 'Stand Up Paddle', hex_color: '#116530', movement_type_category: "Water Sports")
surf = MovementType.create(movement_type: 'Surf', hex_color: '#116530', movement_type_category: "Water Sports")
swim = MovementType.create(movement_type: 'Swim', hex_color: '#116530', movement_type_category: "Water Sports")

iceSkate  = MovementType.create(movement_type: 'Ice Skate', hex_color: '#116530', movement_type_category: "Winter Sports")
alpineSki = MovementType.create(movement_type: 'Alpine Ski', hex_color: '#116530', movement_type_category: "Winter Sports")
backCountrySki = MovementType.create(movement_type: 'Backcountry Ski', hex_color: '#116530', movement_type_category: "Winter Sports")
crossCountrySki = MovementType.create(movement_type: 'Crosscountry Ski', hex_color: '#116530', movement_type_category: "Winter Sports")
snowboard = MovementType.create(movement_type: 'Snowboard', hex_color: '#116530', movement_type_category: "Winter Sports")
snowShoe = MovementType.create(movement_type: 'Snowshoe', hex_color: '#116530', movement_type_category: "Winter Sports")

football  = MovementType.create(movement_type: 'Football', hex_color: '#116530', movement_type_category: "Ball Sports")
soccer = MovementType.create(movement_type: 'Soccer', hex_color: '#116530', movement_type_category: "Ball Sports")
basketball = MovementType.create(movement_type: 'Basketball', hex_color: '#116530', movement_type_category: "Ball Sports")
handball = MovementType.create(movement_type: 'Handball', hex_color: '#116530', movement_type_category: "Ball Sports")
cricket = MovementType.create(movement_type: 'Cricket', hex_color: '#116530', movement_type_category: "Ball Sports")
pickleball = MovementType.create(movement_type: 'Pickleball', hex_color: '#116530', movement_type_category: "Ball Sports")
raquetball = MovementType.create(movement_type: 'Raquetball', hex_color: '#116530', movement_type_category: "Ball Sports")
tennis = MovementType.create(movement_type: 'Tennis', hex_color: '#116530', movement_type_category: "Ball Sports")

rollerSkate  = MovementType.create(movement_type: 'Roller Skate', hex_color: '#116530', movement_type_category: "Other Sports")
rockClimb = MovementType.create(movement_type: 'Rock Climb', hex_color: '#116530', movement_type_category: "Other Sports")
weightTraining = MovementType.create(movement_type: 'Weight Training', hex_color: '#116530', movement_type_category: "Other Sports")
yoga = MovementType.create(movement_type: 'Yoga', hex_color: '#116530', movement_type_category: "Other Sports")
workout = MovementType.create(movement_type: 'Workout', hex_color: '#116530', movement_type_category: "Other Sports")


puts "Seeding complete!!"