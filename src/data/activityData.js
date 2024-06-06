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
  "Dane Whitman",
  "Natasha Romanoff",
  "Henry McCoy",
];

const typeArray = [
  "liked_post",
  "liked_post_2",
  "liked_post_3",
  "liked_comment",
  "liked_comment_2",
  "liked_comment_3",
  "liked_reply",
  "liked_reply_2",
  "liked_reply_3",
  "commented",
  "commented_2",
  "commented_3",
  "replied",
  "replied_2",
  "replied_3",
  "mentioned_post",
  "mentioned_comment",
  "mentioned_reply",
  "followed",
];

const thumbnailTypeArray = ["place", "photo"];

for (let i = 0; i <= 80; i++) {
  activityData.push({
    key: i.toString(),
    name: getRandom(names),
    name2: getRandom(names),
    type: getRandom(typeArray),
    thumbnailType: getRandom(thumbnailTypeArray),
    avatarImg: `https://loremflickr.com/80/80/face?lock=${i}`,
    placeImg: `https://source.unsplash.com/random/80x80/?place,${i}`,
  });
}

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default activityData;

// avatarImg: `https://source.unsplash.com/random/80x80/?human%20face,${i}`,
