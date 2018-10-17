const {db, Centers} = require('./server/db')
const {green, red, blue} = require('chalk')

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!
  const centers = await Promise.all([
    Centers.create({name: 'Manhattan Pet Adoption', location: '326 East 110th Street, New York, NY 10029', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Above_Gotham.jpg', description: 'This location is in Manhattan'}),
    Centers.create({name: 'Brooklyn Pet Adoption', location: '2336 Linden Boulevard, Brooklyn, NY 11208', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxIiRoIjwm6RlpdMf2CZE1VE1l7EuChCUjRPuOzps3fDcHLD3', description: 'This location is in Brooklyn'}),
    Centers.create({name: 'Queens Pet Adoption', location: '92-29 Queens Boulevard, Rego Park, NY 11374', imageUrl: 'https://www.nycgovparks.org/photo_gallery/full_size/1321.jpg', description: 'This location is in Queens'}),
    Centers.create({name: 'Bronx Pet Adoption', location: '464 East Fordham Road, Bronx, NY 10458', imageUrl: 'https://cdn.vox-cdn.com/thumbor/oMi2c8Xpq1sZnNUdGmip6eCPSmI=/0x0:3000x1901/1200x800/filters:focal(1260x711:1740x1191)/cdn.vox-cdn.com/uploads/chorus_image/image/61430091/beonx_welcome_lead_2.0.jpg', description: 'This location is in The Bronx'}),
    Centers.create({name: 'Staten Island Pet Adoption', location: '3139 Veterans Road West, Staten Island, NY 10309', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Spirit_of_America_-_Staten_Island_Ferry.jpg/1200px-Spirit_of_America_-_Staten_Island_Ferry.jpg', description: 'This location is in Staten Island'})
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
