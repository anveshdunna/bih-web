import Image from "next/image";
const imgSrc = "https://source.unsplash.com/featured/80×80/?sig=1&person";

const PostMedia = (props) => {
  return (
    <div className="mt-2 h-80 overflow-clip rounded-xl bg-green-4">
      <Image
        alt=""
        src={imgSrc}
        className="h-full w-full object-cover"
        width={600}
        height={0}
      />
    </div>
  );
};

export default PostMedia;
