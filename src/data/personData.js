const personData = [];

const names = [
  "Hank Pym",
  "Janet van Dyne",
  "Anthony Edward Stark Junior 24",
  "Bruce Banner",
  "Thor Odinson",
  "Richard Jones",
  "Steve Rogers",
  "Clinton Barton",
  "Pietro Maximoff",
  "Dane Whitman",
  "Natasha Romanoff Junior 1313190",
  "Henry McCoy",
];

const times = ["now", "1m", "5m", "1h", "4h", "1d", "2d", "1w", "3w", "Jun 1"];

for (let i = 0; i <= 20; i++) {
  personData.push({
    key: i.toString(),
    name: getRandom(names),
    avatarImgSrc: `https://loremflickr.com/80/80/face?lock=${i}`,
    isFollowing: getRandom([0, 1]),
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

export default personData;
