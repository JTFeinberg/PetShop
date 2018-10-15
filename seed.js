const {db, Centers} = require('./server/db')
const {green, red, blue} = require('chalk')

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!
  const centers = await Promise.all([
    Centers.create({name: 'Manhattan Pet Adoption', location: '326 East 110th Street, New York, NY 10029', imageUrl: 'https: //upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/325px-Above_Gotham.jpg', description: 'This location is in Manhattan'}),
    Centers.create({name: 'Brooklyn Pet Adoption', location: '2336 Linden Boulevard, Brooklyn, NY 11208', imageUrl: 'https: //upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/325px-Above_Gotham.jpg', description: 'This location is in Manhattan'}),
    Centers.create({name: 'Queens Pet Adoption', location: '92-29 Queens Boulevard, Rego Park, NY 11374', imageUrl: 'https: //upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/325px-Above_Gotham.jpg', description: 'This location is in Manhattan'}),
    Centers.create({name: 'Bronx Pet Adoption', location: '464 East Fordham Road, Bronx, NY 10458', imageUrl: 'https: //upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/325px-Above_Gotham.jpg', description: 'This location is in Manhattan'}),
    Centers.create({name: 'Staten Island Pet Adoption', location: '3139 Veterans Road West, Staten Island, NY 10309', imageUrl: 'https: //upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/325px-Above_Gotham.jpg', description: 'This location is in Manhattan'})
  ]);
  
  console.log(blue(`Seeded all ${centers.length} adoption centers`));
  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
