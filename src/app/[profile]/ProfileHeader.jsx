import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileHeader = (props) => {
  const { name, username, followers, following, description, website } = props;
  return (
    <div className="flex w-full justify-between gap-6 px-6 pb-4 pt-16 lg:px-0">
      <div className="flex flex-col gap-2 text-subheadline">
        <div className="flex flex-col gap-1">
          <div className="font-display text-title2 font-semibold">{name}</div>
          <div className="text-gray-11">{username}</div>
        </div>
        <div className="flex gap-1 text-gray-11">
          <div>{followers} Followers</div>
          <span className="font-semibold">·</span>
          <div>{following} Following</div>
        </div>
        <div>{description}</div>
        <div className="text-gray-11 underline">{website}</div>
        <div className="mt-4 flex gap-2">
          <Button variant="outline">Edit profile</Button>
          <Button variant="outline">Share</Button>
        </div>
      </div>
      <Avatar size="md">
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileHeader;
