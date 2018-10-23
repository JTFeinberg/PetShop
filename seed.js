const {db, Centers, Animals} = require('./server/db')
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

  const animals = await Promise.all([
    Animals.create({type:"Cat", name: 'Tova', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/a53b473bd6054404b76360d71f8387b0-1539273068-1539273290-jpg/', age: 4, weight: 11.8, description: 'A volunteer writes Tova is a quiet little lady with a petite and pretty face. She enjoys gentle chin and cheek scratches. A beautiful tortoiseshell, this 3-year-old female cat will quietly warm her way into a lucky adopter\'s heart.'}),
    Animals.create({type:'Dog', name: 'Puchi', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/02ed7c23a01d4e699f29a2e84ddea77c-1538753700-1538753711-jpg/', age: 10, weight: 9.5}),
    Animals.create({type:'Cat', name: 'Salem', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/d78b91e6dd624b79b01eee97faef38fd-1539011226-1539011226-jpg/', age: 7, weight: 10}),
    Animals.create({type:'Cat', name: 'Pastrami', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/7cdad5b610e746b4af0aa9972270ac00-1538954123-1538954123-jpg/', age: 2, weight: 11.7}),
    Animals.create({type:'Cat', name: 'Macy', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/24c68f0e0e46497bad3c7d2a351aa605-1539107752-1539107752-jpg/', age: 10, weight: 6.75}),
    Animals.create({type: 'Dog', name: 'Coco Puff', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/3505abb67327450c8ea29b2aa145b452-1537216011-1537216034-jpg/', age: 5, weight: 49, description: 'A volunteer writes: I\'m cuckoo for Coco Puff! It\'s true! Her quirkiness had me wrapped around her little finger... err..paw. Coco Puff is a little eccentric looking-her antenna ears, long lanky legs, lean body, far set eyes and smirky grin make her look as silly as her personality. Coco loves her toys: she walks around the yard shaking them so hard you\'d think surely she\'s rattled her brains. Once she\'s burned off some steam, she will lay with her paws daintily placed on top of the toy, admiring her treasure. When I showed her a squeaker-just a plain old squeaker, no toy attached, she got so excited I couldn\'t help but give it to her. She laid there, squeaker hanging out of the side of her mouth like a cigar, relishing in her new found loot, not a care in the world. Coco seems housebroken, knows some commands and comes to us spayed and ready for her new home. In spite of her outlandish persona, Coco doesn\'t need anything extraordinary... just some good food, a few toys, and YOU! Ask to meet her today.'}),
    Animals.create({type: 'Cat', name: 'Mr. Tiger', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/a3252b0ebfe149b4b702269c207b0d3d-1540223007-1540223007-jpg/', age: 5, weight: 9.16}),
    Animals.create({type: 'Cat', name: 'Christine', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/18e11b6a10924ba8a01ef66922643678-1539374081-1539374093-jpg/', age: 2, weight: 8}),
    Animals.create({type: 'Cat', name: 'Kerry', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/1ebe3797574b419b89d94508982b743c-1539972098-1539972098-jpg/', age: 10, weight: 16.8}),
    
  ])
  
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
