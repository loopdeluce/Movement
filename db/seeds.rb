# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "faker"

puts "Seeding movement types..."

soccer = MovementType.create(movement_type: 'Soccer', hex_color: '#D4F1F4')
swim = MovementType.create(movement_type: 'Swim', hex_color: '#189AB4')
run = MovementType.create(movement_type: 'Run', hex_color: '#21B6A8')
hike = MovementType.create(movement_type: 'Hike', hex_color: '#116530')

puts "Seeding complete!!"