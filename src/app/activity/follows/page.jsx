import activityData from "@/data/activityData";
import ActivityItem from "../ActivityItem";

const selectedTypes = ["followed"];

export default function ActivityFollowsList(props) {
  return (
    <div className="my-2">
      {activityData
        .filter((item) => selectedTypes.includes(item.type))
        .map((item, index) => (
          <ActivityItem
            key={item.key}
            name={item.name}
            name2={item.name2}
            type={item.type}
            time={index < 5 ? `just now` : `a minute ago`}
            seen={index < 5 ? 0 : 1}
            thumbnailType={item.thumbnailType}
            avatarImg={item.avatarImg}
            placeImg={item.placeImg}
          />
        ))}
    </div>
  );
}
