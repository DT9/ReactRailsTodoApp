# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
todos = Todo.create(
    [
      {
        title: "A new startup idea",
        body: "scopeAR for Uber"
      },
      {
        title: "ScopeAR and Bezos Client meeting",
        body: "Hail our new overlords"
      },
      {
        title: "UI Sprint",
        body: "Optimize UX gestures and pointer placement"
      },
      {
        title: "ScopeAR Conference",
        body: "Demo amazing product and get revenue"
      }
    ])
  