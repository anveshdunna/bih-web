const activityData = [];

const names = [
  "Hank Pym",
  "Janet van Dyne",
  "Anthony Edward Stark",
  "Bruce Banner",
  "Thor Odinson",
  "Richard Jones",
  "Steve Rogers",
  "Clinton Barton",
  "Pietro Maximoff",
  "T'Challa",
  "Dane Whitman",
  "Natasha Romanoff",
  "Henry McCoy",
];

const typeArray = ["liked_post", "followed", "commented"];

for (let i = 0; i <= 30; i++) {
  activityData.push({
    key: i.toString(),
    name: getRandom(names),
    type: getRandom(typeArray),
    avatarImg: `https://source.unsplash.com/random/80x80/?human%20face,${i}`,
  });
}

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default activityData;
