import Place from "@/components/place/Place";
import placeData from "@/data/placeData";
import Person from "@/components/Person";
import personData from "@/data/personData";
import Post from "@/components/post/Post";
import postData from "@/data/postData";

export default function Trending(props) {
  return (
    <div className="mb-16 mt-2">
      <div className="px-6 pb-1 pt-3 text-titleXs font-semibold">Posts</div>
      {postData.slice(0, 3).map((item, index) => (
        <Post
          key={item.key}
          profileName={item.profileName}
          avatarImgSrc={item.avatarImgSrc}
          time={item.time}
          placeName={item.placeName}
          placeCategory={item.placeCategory}
          placeImgSrc={item.placeImgSrc}
          placeThumbnail={item.placeThumbnail}
          isMedia={item.isMedia}
          mediaImgSrc={item.mediaImgSrc}
          isCaption={item.isCaption}
          caption={item.caption}
        />
      ))}
      <div className="h-px bg-border-secondary"></div>
      <div className="px-6 pb-1 pt-3 text-titleXs font-semibold">Places</div>
      {placeData.slice(0, 3).map((item, index) => (
        <Place
          key={item.key}
          name={item.name}
          category={item.category}
          location={item.location}
          type={item.type}
          time={index < 5 ? `just now` : `a minute ago`}
          seen={index < 5 ? 0 : 1}
          thumbnailType={item.thumbnailType}
          thumbnailPlaceholder={item.thumbnailPlaceholder}
          avatarImg={item.avatarImg}
          imgSrc={item.imgSrc}
        />
      ))}
      <div className="h-px bg-border-secondary"></div>
      <div className="px-6 pb-1 pt-3 text-titleXs font-semibold">People</div>
      {personData.slice(0, 3).map((item, index) => (
        <Person
          key={item.key}
          name={item.name}
          avatarImgSrc={item.avatarImgSrc}
        />
      ))}
    </div>
  );
}
