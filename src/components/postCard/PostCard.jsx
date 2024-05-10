import Image from "next/image";
import PostReco from "./PostReco";
import PostMedia from "./PostMedia";

const PostCard = (props) => {
  return (
    <div className="w-full py-3 px-6 lg:px-0 flex gap-2 bg-white text-subheadline max-w-[640px] border-b border-gray-6">
      <div className="w-8 h-8 rounded-full bg-red-8"></div>
      <div className="flex w-full flex-col">
        <div className="flex justify-between h-8 items-center">
          <div className="font-semibold">Username</div>
          <div className="flex gap-2">
            <div className="text-gray-10">21d</div>
            <div className="text-gray-11">...</div>
          </div>
        </div>
        <div>
          Text message that describes their best in here opinion. It could span
          from a couple of lines to a couple of paragraphs. There is no limit as
          such.
        </div>
        <PostReco />
        <PostMedia />
        Recommendation Media Actions
      </div>
      {/* <div className="flex justify-between py-2">
        <div className="flex gap-2">
          <div className="h-8 w-8 overflow-clip rounded-full bg-red-9">
            <Image
              alt=""
              src="https://source.unsplash.com/featured/80×80/?sig=1&person"
              className="h-full w-full object-cover"
              width={80}
              height={80}
            />
          </div>
          <div className="text-xs">
            <div className="font-medium">Username</div>
            <div className="text-gray-11">14h</div>
          </div>
        </div>
        <button className="text-xs">Edit</button>
      </div>
      <div className="">
        <Image
          alt=""
          src="https://source.unsplash.com/featured/?sig=1&iceland"
          className="h-60 w-full rounded-lg object-cover"
          width={80}
          height={80}
        />
      </div>
      <div>Footer</div> */}
    </div>
  );
};

export default PostCard;
