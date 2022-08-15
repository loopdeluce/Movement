# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_11_190519) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "movement_session_id"
    t.bigint "movement_type_id"
    t.string "description"
    t.string "private_notes"
    t.boolean "is_stats_public"
    t.datetime "datetime_activity_finish"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "activity_stats", force: :cascade do |t|
    t.bigint "activity_id"
    t.bigint "time_seconds"
    t.float "distance_miles"
    t.integer "exertion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movement_sessions", force: :cascade do |t|
    t.string "title"
    t.datetime "datetime_session_start"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "movement_types", force: :cascade do |t|
    t.string "movement_type"
    t.string "hex_color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "movement_type_category"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
