const {db, Centers, Animals} = require('./server/db')
const {green, red, blue, cyan} = require('chalk')

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
    Animals.create({type:'Cat', name: 'Theresa', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/a2b8b39f95ad4e53b14dbc9e073180fa-1538941418-1538941418-jpg/', age: 7, weight: 13.7}),
    Animals.create({type:'Cat', name: 'Sour Patch', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/70449eece4a54e5da3b9818b83cdf623-1540136890-1540136890-jpg/', age: 0, weight: 2}),
    Animals.create({type:'Cat', name: 'Little Girl', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/6e2683a1d4cf4a148dd59e8cedcf5583-1539364953-1539364953-jpg/', age: 4, weight: 4.5}),
    Animals.create({type:'Cat', name: 'Artemus', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/26cf38be7f7c4942a2fd6698e409c326-1540048318-1540048324-jpg/', age: 2, weight: 7}),
    Animals.create({type: 'Cat', name: 'Jazzy', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/b30ee842c16b4aa3ba36765e87cd8ab1-1536423219-1536423219-jpg/', age: 7, weight: 10.3, description: 'A volunteer writes: While we don\'t know much about Jazzy\'s background we do know that staff found her easy to handle and very friendly & cooperative. This gorgeous calico likes being in the "living quarter" taking everything in, sometimes rubbing against the door asking for attention and occasionally gazing out wondering where "home" is. When I met her she was very much the lady. She sat calmly (letting her beauty show) while I showered her with those popular chin and cheek rubs and gave her a good but gentle petting. I didn\'t get cheek rubs back but, instead, a steady stream of happy purring! This gal was enjoying herself and me. I wish I could tell you more but it\'s all very simple. A friendly, well behaved, gorgeous, affectionate young lady in the prime of life, who made this reporter feel good. I\'m sure Jazzy would be an ideal sidekick for anyone with just a little gentleness about them.'}),
    Animals.create({type: 'Dog', name: 'Keys', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/da33efc49bb64df0a802b1754b611930-1531332352-1536339226-jpg/', age: 8, weight: 64.2, description: 'Keys is a sweet potato full of wiggles and love. She believe she is a lap dog and will not let the fact that she doesn\'t quite fit hold her back. When she is ready for her walk she becomes a little bunny rabbit and hops in place with all fours. She has very active dreams and will often run her paws and woof and grumble in her sleep. She does prefer to sleep next to me rather than in her crate but will settle into her crate when needed. She will not get out of the bed until I actually get up. No need to worry she will get up and wonder the house after bed time. She is perfect addition to a home looking for a cozy companion. She has a great personality, infectious smile and can be a goof when she gets excited. Enjoys bring you her ball, rope or plush toy for a round of tug or fetch indoors. Hasn\'t showed much interest in fetch while out on our walks to the park.'}),
    Animals.create({type:'Rabbit', name: 'Minnie', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/ce505998d2544beba688f12ea90de584-1539812723-1539812723-jpg/', age: 1, weight: 5.2}),
    Animals.create({type: 'Rabbit', name: 'Bugz', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/b15cf8cd522c43048ad3aa545ea00c6d-1539450860-1539450883-jpg/', age: 7, weight: 6.1}),
    Animals.create({type:'Cat', name: 'Shadow', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/ee76917c121d4c48b5ff52b54e5a2609-1539960598-1539960608-jpg/', age: 10, weight: 5.5}),
    Animals.create({type: 'Cat', name: 'Clyde', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/b4510d16d4a04237bd43f6c4aa38acce-1534433820-1534433831-jpg/', age: 16, weight: 8}),
    Animals.create({type: 'Rabbit', name: 'Snowball', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/158da90f0f6f413e8492b82e3821194a-1537715489-1537715513-jpg/', age: 1, weight: 5.5}),
    Animals.create({type:'Rabbit', name: 'Lucious', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/1cc89b4868054a20965f08ed4d3eaf00-1539974104-1539974111-jpeg/', age: 1, weight: 4}),
    Animals.create({type: 'Cat', name: 'Max', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/a26aa1b469154d408f6579f5957fbafe-1539961267-1539961273-jpg/', age: 4, weight: 9.6}),
    Animals.create({type: 'Dog', name: 'Star', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/5b294d39cd784ae19eb8ba2f6d8d0f10-1539034199-1539034232-jpg/', age: 5, weight: 50.2}),
    Animals.create({type: 'Cat', name: 'Danbury', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/32a76c6dd3d74cd996de2874b0169751-1539533873-1539533873-jpg/', age: 5, weight: 12.6}),
    Animals.create({type: 'Dog', name: 'Onyx', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/1a7bcf6177d0466db9b3e9489470d385-1530474633-1534436625-jpg/', age: 8, weight: 51.4, description: 'A volunteer writes: What is this word \'senior\' you keep using? I am Onyx and I am a puppy! I\'ve always been a puppy, since the day I was born, and I still love to run, jump and play play play the day away...with a few short breaks for snacks, of course. Do you like to play, too? Nothing makes me happier than spending time with people (or other puppies) but I also enjoy going for walks, chasing after balls and getting into games of tug-o-war because I think toys are just the best. Y\'all brought some toys with you today, right? Phew! I thought we might have to be boring for a moment there but now we can PLAY! And guess what? Not only am I good at sports, I\'m a bit of a scholar too. I can sit on command for treats or to wait for you to throw the ball, though sometimes I just kind of hover my butt so I can run after it that much more quickly, and I\'ll always come when you call. I heard my friends here at the Care Center say I am a good boy and that I \'aced my behavior assessment\' which means I can live in just about any home, yippee! If you\'re looking for a 12 year old puppy to share in all the good food and fun the world has to offer then this puppy is looking for you. You can bring the toys (and the treats) and I\'ll bring the love! I am Onyx, ask to meet me today!'}),
    Animals.create({type: 'Cat', name: 'Tina', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/68c5d59314af4b4995fbc2881a7d27d1-1539906558-1539906558-jpg/', age: 5, weight: 13}),
    Animals.create({type: 'Rabbit', name: 'MacChiato', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/713e32b0465c4455909bd0d8a1c2228a-1539812830-1539812880-jpg/', age: 4, weight: 3.1}),
    Animals.create({type: 'Dog', name: 'Princess Peach', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/99de9acf99024458af726a3514e1d6f1-1539715481-1539715488-jpg/', age: 1, weight: 44}),
    Animals.create({type: 'Dog', name: 'Tina Turner', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/03298ddb9815459bbb17130c23e15dde-1540080377-1540080377-jpg/', age: 1, weight: 17.4}),
    Animals.create({type: 'Dog', name: 'Otis', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/f7a188d27ecc426b9a1dd8f489aea692-1540238632-1540238635-jpg/', age: 2, weight: 60, description: 'Ohhhhh Otis! This guy\'s personality is larger than life itself. Otis is a happy go lucky guy, some may say \"too happy\" even. This little whippersnapper steals hearts left and right even when he\'s not trying. Otis is an active and exuberant guy who would love to do any and all activities planned for him. Come by and meet Otis today.'}),
    Animals.create({type: 'Dog', name: 'Kendrick', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/1ae6b1d48af04245bd29c883105f4d24-1538581225-1538581244-jpg/', age: 8, weight: 69.1, description: 'The Foster Writes: Kendrick is a very sweet dog. He is content just lounging around the house or getting you to play with him with his rope toy. He loves stuffed squeaky toys and gnawing on bones and pig ears. He also loves his giant Kong filled with treats that he has to work at to get his reward. Although he is a senior dog, he likes to play like a puppy. '}),
    Animals.create({type: 'Dog', name: 'Bash', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/73df77dde911486788f912c428490539-1527437817-1527437865-jpg/', age: 3, weight: 66.8, description: 'The Foster Writes: Bash is the biggest love bug. He loves to jump in the bed and binge watch netflix shows with us! Bash\'s favorite things are his squeaky toys and blankets. He loves to go for walks and knows commands like \"sit\" \"stay\" \"no\". He gets along with other animals but would also do good as an only child because he loves attention! Bash is an amazing dog and would do well with any loving family that will show him the love and attention he deserves!'}),
    Animals.create({type: 'Dog', name: 'Coldplay', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/51f29e133fa94d73970ed545b787488f-1538684546-1538684546-jpg/', age: 5, weight: 40.8, description: 'A Volunteer Writes: You can\'t buy happiness, but you can adopt it! As evidence may we present Coldplay, who has volunteers wrapped around his perfect paws. He has the most giant heart, which is only one of the many extraordinary things about him, given how tiny his adorable body is. This is a dog who has everyone swooning as he passes, and when you interact with him it\'s game over. He is mellow and calm--he never jumps or gets hyper--but his zoomy tail is always wagging with happiness at having people near. He takes treats like a gentleman, knows how to sit, is amazing on a leash, appears house trained, doesn\'t react to any dogs, fits perfectly into a lap of any size, and is all around the company several of us wished we could have for the rest of the day. And you, lucky person, may have this company for the rest of your life...happiness guaranteed!'}),
    Animals.create({type: 'Dog', name: 'Damien', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/027a09475c5140f5be23eb86c10637dc-1531859660-1532029118-jpg/', age: 5, weight: 61.4, description: 'A volunteer writes: Smushy sweetheart alert!!! If you love to snuggle then Damien is the doggie jackpot you\'ve waited for all your life! He\'s a handsome loverboy with excellent manners and a chunky butt custom-made for sitting smack-bang in the middle of any lap that\'ll fit him. He comes when called for treats, toys, hugs or kisses, and in every situation is just the most lovable, easy-to-handle companion you could hope to meet. Damien strolls easily on leash, greets other dogs politely and takes care of his business tout suite. Out in the yard, he spends most of his downtime just quietly sniffing and exploring. Lucky indeed will be the family who welcomes this good boy into their home, he rocked his behavior assessment with perfect scores across the board and was \'soft, social and attention-seeking throughout\'. A silver-coated saint with a lifetime of love and loyalty to offer, Damien is already neutered and ready to move on to the next chapter of his story ASAP. '}),
    Animals.create({type: 'Dog', name: 'MacKe', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/ec109bdfab674ef0a1b107633f83bb65-1517086147-1517331869-jpg/', age: 6, weight: 62.2}),
    Animals.create({type: 'Dog', name: 'Bolo', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/29b3b86ef06248749e78227c15d24eb2-1538945887-1538945887-jpg/', age: 4, weight: 60.8, description: 'Bolo\'s foster writes: His name may be Bolo, but in our home he mostly goes by baby, because that\'s what he is, a big ol\' sweet baby, with a mushy face and a cuddly personality to match. Bolo has been an angel in our home. He\'s friendly to everyone he meets, he\'s smart as can be, and he doesn\'t disturb our neighbors. We\'re working on his manners while on a walk, learning not to pull on the leash and not to get distracted by other dogs. He has made excellent progress in the short time he\'s been with us, he really is such a good, smart boy! He is ready for his forever home, so don\'t miss your chance to meet him and fall in love with this goofy guy!'}),
    Animals.create({type: 'Dog', name: 'Kong', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/21b9ab5dfb754614b075eedde606a956-1525804450-1525804482-jpg/', age: 8, weight: 67.6, description: 'A Volunteer Writes: This gorgeous boy is so dear--beyond dear. He\'s lived sweetly with children, as we learned from his history, but it is no surprise being in his company. He is so kind, and so gentle, and so affectionate. (And boy oh boy does he appear house trained!) He did beautifully on his behavior exam as well, which is no surprise spending time with this love, who is as eager to please as he is to be loved and love in return. Kong is occasionally unsteady on his feet but such a sport about it; he just wants to hang with the people he\'s hanging with, gently offering up kisses at all times. We are crazy about him, and know you will be too--please come meet him and get a Kong kiss!'}),
    Animals.create({type: 'Rabbit', name: 'Francesca', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/37a28b13c5c04921ba5012114d157ffa-1539450298-1539450522-jpg/', age: 1, weight: 5.6}),
    Animals.create({type: 'Rabbit', name: 'Gina', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/677fa74c434a4b539694ae4504761065-1539812609-1539812671-jpg/', age: 1, weight: 4.2}),
    Animals.create({type: 'Rabbit', name: 'Chet', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/05a091980a8f4e7d93f13e506356404c-1539812783-1539812797-jpg/', age: 1, weight: 4}),
    Animals.create({type: 'Rabbit', name: 'Miso', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/12e74752f2b648388e5b65a8fc1de7f3-1539813078-1539813214-jpg/', age: 1, weight: 4}),
    Animals.create({type: 'Rabbit', name: 'Dusty Fluffy', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/310ba3eeb9864f12be9970a3f3212c26-1539711220-1539711220-jpg/', age: 2, weight: 6.9}),
    Animals.create({type: 'Rabbit', name: 'Big Dipper', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/b2b1563ade134be095756e4b064ac506-1539703476-1539703476-jpg/', age: 1, weight: 4}),
    Animals.create({type: 'Rabbit', name: 'Midnight', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/1b4230549e384380bf29caf5425843ec-1540076423-1540076423-jpg/', age: 1, weight: 3.2}),
    Animals.create({type: 'Rabbit', name: 'Lavender', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/d23be8f3753146d7a178a09742197f9d-1538769507-1538769519-jpg/', age: 1, weight: 4.6}),
    Animals.create({type: 'Rabbit', name: 'Litter Dipper', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/b50443b59efd491aa7109e8ad99723d7-1539703383-1539703383-jpg/', age: 1, weight: 3.3}),
    Animals.create({type: 'Dog', name: 'Abigail', sex: 'Female', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/c63b0da8222b44c2a69f956a3295eb22-1534093351-1539104236-jpg/', age: 5, weight: 65.7, description: 'A volunteer writes: Her smile will light up a room and she loves to play and give kisses. Abigail was so happy going for a walk and checked on me with head nudges the whole time. When Abigail gets excited she literally jumps high for joy. She would make an amazing buddy for someone looking for a new best friend!'}),
    Animals.create({type: 'Dog', name: 'Jet', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/b20860c5d3ff4192bbe59808a46acbe1-1538749325-1539715119-jpg/', age: 7, weight: 81.8, description: 'A volunteer writes: Straight off the runway is Jet. I saw him in his kennel and a warm familiarity hit me. He has a lovely "family" dog vibe about him. Could it be his mellow golden and white markings? His low key charm? Not sure what sold me, but mark me \"sold\"! Off to the playpen we went. Other dogs don\'t faze him, but a slow introduction is always best. (No purrs, please.) His former human taught him how to \"sit\", but even cooler--\"lift\", so he can get untangled from his leash when it happens. Well played! And for a big dog, I braced myself for a sleigh ride...that never happened. He moves so lightly and easily on the leash. He is house trained and despite some silver hairs among the gold, a most youthful senior, with great spirit and energy. No need to go to JFK and deal with airport traffic to take a Jet; come to the Adoption Center!'}),
    Animals.create({type: 'Dog', name: 'Armstrong', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/e01392e2bcd54543a979e3466dff4bc7-1539545740-1539545749-jpg/', age: 2, weight: 59, description: 'Not just anyone could have the name Armstrong. Neil (the first man on the moon), and Lance (one of the greatest athletes in our time), are the most famous Armstrong\'s we know. The name carries alot of weight, so this dog must be special to have been named, Armstrong. I happen to think so. He is quit handsome, but it\'s his personality that makes him a real charmer. Soft and uber friendly, he\'ll wiggle his way into the history books. He has a tendency to get a little too excited but nothing a little training can\'t fix.'}),
    Animals.create({type: 'Dog', name: 'Poochie', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/52eff4820ebd469a8317ec445a7a83c7-1539815428-1539815428-jpg/', age: 10, weight: 12.5}),
    Animals.create({type: 'Dog', name: 'Simba', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/7a840f382d4a49cdacc3e90fe75ded51-1539962906-1539962998-jpg/', age: 9, weight: 51}),
    Animals.create({type: 'Dog', name: 'Prince', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/f6e92958d9f246f8996935d75320ec37-1540132399-1540132499-jpg/', age: 3, weight: 35}),
    Animals.create({type: 'Dog', name: 'Nabisco', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/a40df53fe89e4c268ed890e94516e6b1-1538157807-1538157807-jpg/', age: 6, weight: 70.8, description: 'A volunteer writes: Nabisco is an absolute treat, as his name might hint at. He\'s an adult male, said to be house trained, and a bit on the fuller figured tip. But hey, that\'s more to love. And easy to leash, walking at a pleasant pace. Nabisco is a very affectionate, people-centric dog, relishing all kinds of strokes, ear scratches, cuddles, so would likely welcome a family to love. More people, more love opportunities! Nabisco enjoyed treats (yes he did!) and enthusiastically showed off crackerjack \"sit\" skills. Dogs that arrived and departed in the adjoining pen received friendly interest at the gate, so Nabisco seems okay with male and female dogs. The backyard hose seemed to cause him some concern, and he needed cookies and gentle coaxing to get past it. (Oreo cookies get me past a lot, too, so I get it.) With his love sponge style, and sweet ways, Nabisco is welcome addition to any household with an average amount of dog owning experience.'}),
    Animals.create({type: 'Dog', name: 'Jupiter', sex: 'Male', imageUrl: 'https://nycacc.shelterbuddy.com/storage/image/68dd8c21632847ab8ab8902c0c2c7747-1537890532-1537890540-jpg/', age: 3, weight: 64, description: 'A staff member writes:Jupiter is a friendly teddy bear who likes to be independent but will be your best friend and give paw, sit and lie down for treats! Jupiter loves to be walked as he struts happily whenever he goes out for one and sticks right by your side. His big smile will light up the room. Jupiter will send you to the moon!'}),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),
    // Animals.create({type:, name: , sex: , imageUrl: , age: , weight: , description: }),

    
  ]);

  const animalCenter = await Promise.all(
    animals.map(async animal => {await animal.setCenter(Math.floor(Math.random() * Math.floor(5)) + 1)}
))
  
  console.log(blue(`Seeded all ${centers.length} adoption centers`));
  console.log(cyan(`Seeded all ${animals.length} animals`));
  console.log(cyan(`Assigned all ${animalCenter.length} animals an adoption center`));
  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
