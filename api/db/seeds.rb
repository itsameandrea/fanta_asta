# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Client.destroy_all
Team.destroy_all

puts "Creating clients..."

client_a = Client.create name: 'Client A', subdomain: 'client_a'
client_b = Client.create name: 'Client B', subdomain:'client_b'

puts "Creating users..."

user_a = User.create email: 'user@a.com', password: 'password', password_confirmation: 'password', client_id: client_a.id
user_b = User.create email: 'user@b.com', password: 'password', password_confirmation: 'password', client_id: client_a.id
user_c = User.create email: 'user@a.com', password: 'password', password_confirmation: 'password', client_id: client_b.id

puts "Creating teams..."

team_a = Team.create name: 'Bar', client_id: client_a.id
team_b = Team.create name: 'Service', client_id: client_a.id
team_c = Team.create name: 'Kitchen', client_id: client_b.id