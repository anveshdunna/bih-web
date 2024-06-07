import IcArrowReply12Bold from "@/assets/icons/ArrowReply12Bold";
import IcComment12Bold from "@/assets/icons/Comment12Bold";
import IcHeart12Bold from "@/assets/icons/Heart12Bold";
import IcMention12 from "@/assets/icons/Mention12";
import IcPerson12Bold from "@/assets/icons/Person12Bold";
import PageTemplate from "@/components/PageTemplate";
import ProfileName from "@/components/ProfileName";
import Thumbnail from "@/components/Thumbnail";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import activityData from "@/data/activityData";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function ActivityItem(props) {
  const {
    name,
    name2,
    type,
    time,
    seen,
    avatarImg,
    placeImg,
    thumbnailType,
    thumbnailPlaceholder,
  } = props;
  return (
    <div className="flex gap-3 rounded-xl px-6 py-3 text-subheadline transition duration-300 hover:cursor-pointer hover:bg-surface-hover active:bg-surface-active lg:px-3">
      <Avatar>
        <AvatarImage src={avatarImg} />
        <AvatarFallback />
        {!seen && (
          <div className="absolute -ml-3 h-1.5 w-1.5 self-center rounded-full bg-icon-critical"></div>
        )}
        {(type === "liked_post" ||
          type === "liked_post_2" ||
          type === "liked_post_3" ||
          type === "liked_comment" ||
          type === "liked_comment_2" ||
          type === "liked_comment_3" ||
          type === "liked_reply" ||
          type === "liked_reply_2" ||
          type === "liked_reply_3") && (
          <div className="absolute ml-6 mt-6 flex h-5 w-5 items-center justify-center rounded-full bg-activity-liked text-text-contrast outline outline-2 outline-bg">
            <IcHeart12Bold />
          </div>
        )}
        {(type === "commented" ||
          type === "commented_2" ||
          type === "commented_3") && (
          <div className="absolute ml-6 mt-6 flex h-5 w-5 items-center justify-center rounded-full bg-activity-commented text-text-contrast outline outline-2 outline-bg">
            <IcComment12Bold />
          </div>
        )}
        {(type === "replied" ||
          type === "replied_2" ||
          type === "replied_3") && (
          <div className="absolute ml-6 mt-6 flex h-5 w-5 items-center justify-center rounded-full bg-activity-commented text-text-contrast outline outline-2 outline-bg">
            <IcArrowReply12Bold />
          </div>
        )}
        {(type === "mentioned_post" ||
          type === "mentioned_comment" ||
          type === "mentioned_reply") && (
          <div className="absolute ml-6 mt-6 flex h-5 w-5 items-center justify-center rounded-full bg-activity-mentioned text-text-contrast outline outline-2 outline-bg">
            <IcMention12 />
          </div>
        )}
        {type === "followed" && (
          <div className="absolute ml-6 mt-6 flex h-5 w-5 items-center justify-center rounded-full bg-activity-followed text-text-contrast outline outline-2 outline-bg">
            <IcPerson12Bold />
          </div>
        )}
      </Avatar>
      <div className="flex flex-1 flex-col">
        {type === "liked_post" && (
          <div>
            <ProfileName name={name} /> liked your post
          </div>
        )}
        {type === "liked_post_2" && (
          <div>
            <ProfileName name={name} /> and <ProfileName name={name2} /> liked
            your post
          </div>
        )}
        {type === "liked_post_3" && (
          <div>
            <ProfileName name={name} /> and 2 others liked your post
          </div>
        )}
        {type === "liked_comment" && (
          <div>
            <ProfileName name={name} /> liked your comment
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "liked_comment_2" && (
          <div>
            <ProfileName name={name} /> and <ProfileName name={name2} /> liked
            your comment
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "liked_comment_3" && (
          <div>
            <ProfileName name={name} /> and 2 others liked your comment
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "liked_reply" && (
          <div>
            <ProfileName name={name} /> liked your reply
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "liked_reply_2" && (
          <div>
            <ProfileName name={name} /> and <ProfileName name={name2} /> liked
            your reply
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "liked_reply_3" && (
          <div>
            <ProfileName name={name} /> and 2 others liked your reply
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "commented" && (
          <div>
            <ProfileName name={name} /> commented: Where was this place? This
            looks very interesting. Please share the place location. Would love
            to visit here.
          </div>
        )}
        {type === "commented_2" && (
          <div>
            <ProfileName name={name} /> and <ProfileName name={name2} />{" "}
            commented on your post
          </div>
        )}
        {type === "commented_3" && (
          <div>
            <ProfileName name={name} /> and 2 others commented on your post
          </div>
        )}
        {type === "replied" && (
          <div>
            <ProfileName name={name} /> replied: Where was this place? This
            looks very interesting. Please share the place location. Would love
            to visit here.
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "replied_2" && (
          <div>
            <ProfileName name={name} /> and <ProfileName name={name2} /> replied
            to your comment
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "replied_3" && (
          <div>
            <ProfileName name={name} /> and 2 others replied to your comment
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "mentioned_post" && (
          <div>
            <ProfileName name={name} /> mentioned you in a post
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "mentioned_comment" && (
          <div>
            <ProfileName name={name} /> mentioned you in a comment
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "mentioned_reply" && (
          <div>
            <ProfileName name={name} /> mentioned you in a reply
            <div className="mt-1 border-l-2 border-border pl-2 text-text-secondary">
              This looks very interesting. The colors look too good. Even the
              ambience and vibes are on point. Please share the place location.
              Would love to visit here.
            </div>
          </div>
        )}
        {type === "followed" && (
          <div>
            <ProfileName name={name} /> started following you
          </div>
        )}

        <div className="mt-1 text-caption1 text-text-tertiary">{time}</div>
      </div>

      {type === "followed" && (
        <div className="flex items-center">
          <Button>Follow</Button>
        </div>
      )}

      {(type === "liked_post" ||
        type === "liked_post_2" ||
        type === "liked_post_3" ||
        type === "commented" ||
        type === "commented_2" ||
        type === "commented_3") && (
        <Thumbnail
          type={thumbnailType}
          imgSrc={placeImg}
          placeholder={thumbnailPlaceholder}
        />
      )}
    </div>
  );
}
