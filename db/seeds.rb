i = 1
5.times do
  @user =  User.create(
    email: "test#{i}@email.com",
    password: 'password'
  )
  i += 1
  50.times do
    Cat.create(
      name: Faker::Creature::Cat.name, 
      breed: Faker::Creature::Cat.breed, 
      color: Faker::Creature::Cat.registry, 
      avatar: Faker::Avatar.image(slug: 'cat', size: '100x400', format: 'png', set: 'set4'),
      user_id: @user.id
    )
  end
end
  
puts "50 Cats Seeded"