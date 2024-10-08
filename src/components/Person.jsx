import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import ProfileName from "./ProfileName";
import { Button } from "./ui/button";
import { toStringLowerCase } from "@/lib/stringUtils";
import ToggleFollowButton from "./ToggleFollow";
import Link from "next/link";

function Person(props) {
  const { name, avatarImgSrc, isFollowing } = props;
  const username = toStringLowerCase(name);
  return (
    <div className="relative rounded-xl px-6 py-3 transition hover:cursor-pointer hover:bg-fill-tertiary-hover active:bg-fill-tertiary-active lg:px-3">
      <Link
        className="absolute inset-0 z-0 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-[3px] focus-visible:ring-offset-bg"
        tabIndex="-1"
        href="https://www.google.com"
      ></Link>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatarImgSrc} />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="mr-3 flex min-w-0 flex-1 flex-col text-bodyMd">
          <ProfileName name={name} />
          <div className="z-10 min-w-0 max-w-max flex-1 truncate whitespace-nowrap text-fg-secondary">{`@${username}`}</div>
        </div>
        <div className="z-10 flex items-center gap-2">
          <ToggleFollowButton initial={isFollowing} />
        </div>
      </div>
    </div>
  );
}

export default Person;
