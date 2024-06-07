import PageTemplate from "@/components/PageTemplate";
import Post from "@/components/post/Post";
import PostCard from "@/components/post/Post";
import postData from "@/data/postData";

export default function Home() {
  return (
    <PageTemplate>
      <div className="section">
        <div className="fixed-container">
          <div className="flex flex-col">
            {postData.map((item, index) => (
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
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
