const postData = [];

const profileNames = [
  "Hank Pym",
  "Janet van Dyne",
  "Anthony Edward Stark",
  "Bruce Banner",
  "Thor Odinson",
  "Richard Jones",
  "Steve Rogers",
  "Clinton Barton",
  "Pietro Maximoff",
  "Dane Whitman",
  "Natasha Romanoff",
  "Henry McCoy",
];

export const placeNames = [
  "Taj Mahal Tiffin Center",
  "Amravati Park",
  "Subhash Memorial",
  "Golden Gate Bridge",
  "Eiffel Tower Bistro",
  "Liberty Square",
  "Gandhi Museum",
  "Lincoln Memorial",
  "Great Wall Noodle House",
  "Central Park Zoo",
  "Victoria Falls Café",
  "Sydney Opera House Restaurant",
  "Machu Picchu Sanctuary",
  "Mount Everest Base Camp",
  "Stonehenge Visitor Center",
  "Colosseum Ristorante",
  "Louvre Museum",
  "Niagara Falls Observation Deck",
  "Kremlin Palace",
  "Forbidden City Gardens",
  "Statue of Liberty Harbor",
  "Angkor Wat Pavilion",
  "Buckingham Palace Grounds",
  "Chichen Itza Marketplace",
  "Petra Desert Camp",
  "Grand Canyon Lodge",
  "Sagrada Familia Park",
  "Burj Khalifa Terrace",
  "Acropolis Museum Café",
  "Christ the Redeemer Plaza",
];

const placeCategories = [
  "Exhibit",
  "Art piece",
  "Historical artifact",
  "Guided tour",
  "Interactive display",
  "Temporary exhibition",
  "Sculpture",
  "Painting",
  "Ancient relic",
  "Museum shop",
  "Cafe",
  "Children's activity",
  "Dish",
  "Appetizer",
  "Main course",
  "Dessert",
  "Cocktail",
  "Wine selection",
  "Vegetarian option",
  "Seafood dish",
  "Steak",
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Salad",
  "Service",
  "Walking trail",
  "Picnic spot",
  "Playground",
  "Flower garden",
  "Viewpoint",
  "Wildlife sighting",
  "Lake",
  "Fountain",
  "Open field",
  "Exercise area",
  "Dog park",
  "Suite",
  "Spa service",
  "Gym",
  "Restaurant",
  "Breakfast buffet",
  "Swimming pool",
  "Rooftop bar",
  "Room service",
  "View",
  "Amenities",
  "Concierge service",
  "Store",
  "Clothing shop",
  "Food court restaurant",
  "Entertainment area",
  "Cinema",
  "Specialty shop",
  "Bookstore",
  "Tech store",
  "Sale",
  "Kids' play area",
  "Reading corner",
  "Book collection",
  "Study area",
  "Kids section",
  "Historical archives",
  "Digital resources",
  "Quiet zone",
  "Community events",
  "Magazine selection",
  "Librarian assistance",
  "Swimming area",
  "Surfing spot",
  "Sunbathing spot",
  "Beach bar",
  "Snorkeling area",
  "Beach volleyball court",
  "Beach restaurant",
  "Shell collecting spot",
  "View of sunset",
  "Beach activities",
  "Roller coaster",
  "Water ride",
  "Carousel",
  "Food stand",
  "Arcade game",
  "Live show",
  "Themed area",
  "Parade",
  "Fireworks display",
  "Souvenir shop",
];

const captions = [
  "You have to visit this coffee shop! Their lattes are the best I've ever had. A must-try!",
  "This sushi place is amazing. The salmon rolls are to die for! Highly recommend it.",
  "The ambiance here is perfect for a date night. Try their steak; it's fantastic!",
  "Great spot for brunch. The avocado toast and mimosas are a perfect combo!",
  "If you're a pizza lover, this place is a dream. The margherita pizza is a must-have!",
  "The bakery here is incredible. Their croissants and pastries are so fresh and delicious. Perfect for a morning treat or an afternoon snack.",
  "This is the best burger joint in town. The cheeseburgers and fries are a match made in heaven! Plus, the milkshakes are thick and creamy. The staff is super friendly, and the ambiance is perfect for a casual meal. I've been coming here for years, and it never disappoints. They also have great vegetarian options, so there's something for everyone.",
  "Perfect place for a family dinner. The pasta dishes are simply delightful, and the portions are generous. The service is outstanding, and they make you feel right at home. Their wine list is impressive too. We had a wonderful evening, and the kids loved the dessert menu. Highly recommend making a reservation as it gets quite busy on weekends.",
  "For seafood lovers, this restaurant is a gem. The grilled salmon is exceptional. Don't miss their seafood platter for a real treat. The atmosphere is cozy and perfect for a special occasion. We celebrated our anniversary here, and the staff went above and beyond to make it memorable. The fresh oysters and lobster bisque were the highlights of our meal.",
  "Great place for craft beers. The selection is fantastic, and the pretzels are a great snack! Perfect spot for hanging out with friends. They often have live music on weekends, which adds to the vibrant atmosphere. The beer garden is spacious, and there's plenty of seating. Whether you're a beer enthusiast or just looking for a fun place to unwind, this is the place to be.",
];

const times = ["now", "1m", "5m", "1h", "4h", "1d", "2d", "1w", "3w", "Jun 1"];

for (let i = 0; i <= 20; i++) {
  postData.push({
    key: i.toString(),
    profileName: getRandom(profileNames),
    avatarImgSrc: `https://loremflickr.com/80/80/face?lock=${i}`,
    time: getRandom(times),
    placeName: getRandom(placeNames),
    placeCategory: getRandomItems(placeCategories),
    placeImgSrc: `https://source.unsplash.com/random/80x80/?place,${i}`,
    placeThumbnail: getRandom([0, 1]),
    isMedia: getRandom([0, 1]),
    mediaImgSrc: `https://source.unsplash.com/random/800x400/?tourism,${i}`,
    isCaption: getRandom([0, 1]),
    caption: getRandom(captions),
  });
}

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getRandomItems(array) {
  // Shuffle the array to ensure randomness
  const shuffledArray = array.sort(() => 0.5 - Math.random());

  // Get a random number between 1 and 3
  const itemCount = Math.floor(Math.random() * 3) + 1;

  // Get unique items up to the itemCount
  const uniqueItems = [...new Set(shuffledArray)].slice(0, itemCount);

  // Join the items into a string
  return uniqueItems.join(", ");
}

export default postData;

// avatarImg: `https://source.unsplash.com/random/80x80/?human%20face,${i}`,
