import Image from "next/image";
import PostReco from "./PostReco";
import PostMedia from "./PostMedia";
import { Button } from "../ui/button";
import IcHeart20 from "@/assets/icons/Heart20";
import IcMoreHorizontal20 from "@/assets/icons/MoreHorizontal20";
import IcComment20 from "@/assets/icons/Comment20";
import IcList20 from "@/assets/icons/List20";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import ProfileName from "../ProfileName";

export default function Post(props) {
  const {
    profileName,
    avatarImgSrc,
    time,
    placeName,
    placeCategory,
    placeImgSrc,
    placeThumbnail,
    isMedia,
    mediaImgSrc,
    isCaption,
    caption,
  } = props;
  return (
    <div className="flex w-full max-w-[640px] gap-2 border-b border-border-secondary px-6 py-3 text-subheadline lg:px-0">
      <Avatar size="sm">
        <AvatarImage src={avatarImgSrc} />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col">
        <div className="flex h-8 items-center justify-between">
          <ProfileName name={profileName} />
          <div className="flex items-center gap-2">
            <div className="text-text-tertiary">{time}</div>
            <Button variant="ghost" className="text-icon" size="icon">
              <IcMoreHorizontal20 />
            </Button>
          </div>
        </div>
        <PostReco
          placeName={placeName}
          placeCategory={placeCategory}
          placeImgSrc={placeImgSrc}
          placeThumbnail={placeThumbnail}
        />
        {isMedia === 1 && <PostMedia mediaImgSrc={mediaImgSrc} />}
        {isCaption === 1 && <div className="mt-2">{caption}</div>}

        <div className="-mx-1.5 mt-1 flex gap-6 text-gray-11">
          <div className="flex-1">
            <Button
              variant="ghost"
              className="gap-1 px-1.5 text-footnote font-normal"
            >
              <IcHeart20 />
              14
            </Button>
          </div>
          <div className="flex-1">
            <Button
              variant="ghost"
              className="gap-1 px-1.5 text-footnote font-normal"
            >
              <IcComment20 />
              23
            </Button>
          </div>
          <div className="flex-1">
            <Button
              variant="ghost"
              className="gap-1 px-1.5 text-footnote font-normal"
            >
              <IcList20 />
              14
            </Button>
          </div>
          <div className="">
            <Button variant="ghost" className="gap-1 px-1.5">
              <IcHeart20 />
            </Button>
          </div>
        </div>
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
}
