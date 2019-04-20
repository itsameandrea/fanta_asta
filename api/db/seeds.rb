# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating users..."

user_a = User.create email: 'user@a.com', password: 'password', password_confirmation: 'password'
user_b = User.create email: 'user@b.com', password: 'password', password_confirmation: 'password'
user_c = User.create email: 'user@a.com', password: 'password', password_confirmation: 'password'

puts "Creating clients..."

client_a = Client.create name: 'Client A', subdomain: 'client_a'
client_b = Client.create name: 'Client B', subdomain:' client_b'

client_a.users.push(user_a, user_b)
client_b.users.push(user_c)

puts "Creating teams..."

team_a = Team.create name: 'Bar', client: client_a
team_b = Team.create name: 'Service', client: client_a
team_c = Team.create name: 'Kitchen', client: client_b