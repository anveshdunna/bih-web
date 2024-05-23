import PageTemplate from "@/components/PageTemplate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import activityData from "@/data/activityData";

export default function page() {
  return (
    <>
      <PageTemplate>
        <div className="section">
          <div className="fixed-container">
            <div className="w-full max-w-[640px]">
              <ActivityHeader />
              <ActivityList />
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

function ActivityItem(props) {
  const { name, type, avatarImg } = props;
  return (
    <div className="flex gap-3 rounded-xl px-6 py-3 text-subheadline transition hover:cursor-pointer hover:bg-gray-3 active:bg-gray-4 lg:px-0">
      <Avatar>
        <AvatarImage src={avatarImg} />
      </Avatar>
      <div className="flex flex-col">
        {type === "liked_post" && (
          <div>
            <span className="font-semibold">{name}</span> liked your post
            <div className="text-gray-11">
              This place is too good. You should definitely try it.
            </div>
          </div>
        )}
        {type === "followed" && (
          <div>
            <span className="font-semibold">{name}</span> followed you.
          </div>
        )}
        {type === "commented" && (
          <div>
            <span className="font-semibold">{name}</span> commented:
            <div className="text-gray-11">
              Where was this place? This looks very interesting. Please share
              the place location. Would love to visit here.
            </div>
          </div>
        )}

        {/* <div>
          <span className="font-semibold">{name}</span> liked your post.
        </div> */}
        <div className="mt-1 text-caption1 text-gray-10">just now</div>
      </div>
    </div>
  );
}

function ActivityList(props) {
  return (
    <div className="my-2">
      {activityData.map((item) => (
        <ActivityItem
          key={item.key}
          name={item.name}
          type={item.type}
          avatarImg={item.avatarImg}
        />
      ))}
    </div>
  );
}

function ActivityHeader(props) {
  return (
    <div className="sticky top-0 bg-whiteA-11 px-6 shadow-borderBottom lg:px-0">
      <div className="h-12"></div>
      <div className="text-title2 font-semibold">Activity</div>
      <div className="flex gap-2 py-4">
        <Button>All</Button>
        <Button>Follows</Button>
        <Button>Replies</Button>
        <Button>Mentions</Button>
      </div>
    </div>
  );
}
