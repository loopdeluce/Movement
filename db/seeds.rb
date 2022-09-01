# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "faker"

puts "Seeding movement types..."

speedwalk = MovementType.create(momovement_type: 'SpeedWalk', hex_color: '#116530', movement_type_category: "Foot Sports")
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

puts "Seeding users..."

u1 = User.create(email: 'lucy.d.bullen@gmail.com', password: 'loopdeluce', password_confirmation:'loopdeluce', first_name:"Lucy", last_name:'Bullen')
u2 = User.create(email: 'dlbullen@aol.com', password: 'Mom', password_confirmation:'Mom', first_name:"Mary", last_name:'Bullen')

puts "Seeding sessions..."

s1 = MovementSession.create(title: 'January jam', datetime_session_start: 'Mon, 10 Jan 2022 08:03:22.000000000 UTC +00:00')
s2 = MovementSession.create(title: 'Fit feb 1', datetime_session_start: 'Wed, 16 Feb 2022 16:20:22.000000000 UTC +00:00')
s3 = MovementSession.create(title: 'Fit feb 2', datetime_session_start: 'Sat, 26 Feb 2022 09:09:22.000000000 UTC +00:00')
s4 = MovementSession.create(title: 'March Madness', datetime_session_start: 'Tue, 08 Mar 2022 17:34:22.000000000 UTC +00:00')
s5 = MovementSession.create(title: 'Snow Hikers', datetime_session_start: 'Thu, 05 May 2022 18:09:22.000000000 UTC +00:00')
s6 = MovementSession.create(title: 'Morning Trail Run', datetime_session_start: 'Wed, 18 May 2022 05:25:22.000000000 UTC +00:00')
s7 = MovementSession.create(title: '06/26 Morning Bike Ride', datetime_session_start: 'Sat, 25 Jun 2022 07:23:22.000000000 UTC +00:00')
s8 = MovementSession.create(title: 'July Swim', datetime_session_start: 'Mon, 11 Jul 2022 17:15:22.000000000 UTC +00:00')
s9 = MovementSession.create(title: 'Tri Training', datetime_session_start: 'Sat, 07 Aug 2022 06:58:22.000000000 UTC +00:00')

puts "Seeding activities and activity stats..."

a1 = Activity.create(user: u1, movement_session: s1, movement_type: alpineSki, description: "Its great to ski", private_notes: 'I love it too much', is_stats_public: true, datetime_activity_finish: 'Mon, 10 Jan 2022 18:03:22.000000000 UTC +00:00')
ActivityStat.create(activity: a1, time_seconds: 30315, exertion: 9)
a2 = Activity.create(user: u1, movement_session: s2, movement_type: iceSkate, description: "Very shaky, but fun", private_notes: 'Note to self: got to a different rink next time', is_stats_public: true, datetime_activity_finish: 'Wed, 16 Feb 2022 18:20:22.000000000 UTC +00:00')
ActivityStat.create(activity: a2, time_seconds: 7987, exertion: 6)
a3 = Activity.create(user: u1, movement_session: s3, movement_type: hike, description: "Skinned up", private_notes: 'So out of breath', is_stats_public: true, datetime_activity_finish: 'Sat, 26 Feb 2022 10:49:22.000000000 UTC +00:00')
ActivityStat.create(activity: a3, time_seconds: 6023, exertion: 9)
a4 = Activity.create(user: u1, movement_session: s3, movement_type: backCountrySki, description: "Fresh lines!", private_notes: 'Tightened boots a couple times', is_stats_public: true, datetime_activity_finish: 'Sat, 26 Feb 2022 11:39:22.000000000 UTC +00:00')
ActivityStat.create(activity: a4, time_seconds: 1978, exertion: 6)
a5 = Activity.create(user: u1, movement_session: s3, movement_type: hike, description: "Skinned up again", private_notes: 'So out of breath sos', is_stats_public: true, datetime_activity_finish: 'Sat, 26 Feb 2022 14:00:22.000000000 UTC +00:00')
ActivityStat.create(activity: a5, time_seconds: 6223, exertion: 9)
a6 = Activity.create(user: u1, movement_session: s3, movement_type: backCountrySki, description: "Found a new way down", private_notes: 'Never fell cowabunga', is_stats_public: true, datetime_activity_finish: 'Sat, 26 Feb 2022 15:00:22.000000000 UTC +00:00')
ActivityStat.create(activity: a6, time_seconds: 2097, exertion: 7)
a7 = Activity.create(user: u1, movement_session: s4, movement_type: basketball, description: "Hoopstar!!", private_notes: 'Jennie beat me', is_stats_public: true, datetime_activity_finish: 'Tue, 08 Mar 2022 18:34:22.000000000 UTC +00:00')
ActivityStat.create(activity: a7, time_seconds: 2582, exertion: 3)
a8 = Activity.create(user: u1, movement_session: s5, movement_type: hike, description: "Beautiful hike for spikes and a headlamp", private_notes: 'Wish I had brought an extra layer', is_stats_public: true, datetime_activity_finish: 'Thu, 05 May 2022 22:09:22.000000000 UTC +00:00')
ActivityStat.create(activity: a8, time_seconds: 2582, exertion: 5)
a9 = Activity.create(user: u1, movement_session: s5, movement_type: yoga, description: "Restorative", private_notes: 'Great playlist', is_stats_public: true, datetime_activity_finish: 'Thu, 05 May 2022 23:19:22.000000000 UTC +00:00')
ActivityStat.create(activity: a9, time_seconds: 3607, exertion: 2)
a10 = Activity.create(user: u1, movement_session: s6, movement_type: trailRun, description: "Pretty morning run", private_notes: 'Girl power', is_stats_public: true, datetime_activity_finish: 'Wed, 18 May 2022 06:55:22.000000000 UTC +00:00')
ActivityStat.create(activity: a10, time_seconds: 5014, exertion: 7)
a11 = Activity.create(user: u1, movement_session: s7, movement_type: bike, description: "Sun was out for the bike", private_notes: 'Must do again soon', is_stats_public: true, datetime_activity_finish: 'Sat, 25 Jun 2022 07:23:22.000000000 UTC +00:00')
ActivityStat.create(activity: a11, time_seconds: 11027, exertion: 4)
a12 = Activity.create(user: u1, movement_session: s8, movement_type: swim, description: "Chatfield reservior swim - so majestic", private_notes: 'No wet suit needed', is_stats_public: true, datetime_activity_finish: 'Mon, 11 Jul 2022 18:03:22.000000000 UTC +00:00')
ActivityStat.create(activity: a12, time_seconds: 2777, exertion: 6)
a13 = Activity.create(user: u1, movement_session: s9, movement_type: swim, description: "Refreshing swim back at Chatfield Reservoir", private_notes: 'Dress rehearsal', is_stats_public: true, datetime_activity_finish: 'Sat, 07 Aug 2022 06:58:22.000000000 UTC +00:00')
ActivityStat.create(activity: a13, time_seconds: 2832, exertion: 5)
a14 = Activity.create(user: u1, movement_session: s9, movement_type: bike, description: "Bike through the Canyon - many sheep", private_notes: 'Dress rehearsal', is_stats_public: true, datetime_activity_finish: 'Sat, 07 Aug 2022 12:28:22.000000000 UTC +00:00')
ActivityStat.create(activity: a14, time_seconds: 11587, exertion: 6)
a14 = Activity.create(user: u1, movement_session: s9, movement_type: run, description: "Only got through a small bit of the run", private_notes: 'Dress rehearsal', is_stats_public: true, datetime_activity_finish: 'Sat, 07 Aug 2022 13:18:22.000000000 UTC +00:00')
ActivityStat.create(activity: a14, time_seconds: 1983, exertion: 8)

puts "Seeding complete!!"