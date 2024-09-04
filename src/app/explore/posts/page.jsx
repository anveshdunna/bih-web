import Place from "@/components/place/Place";
import placeData from "@/data/placeData";

export default function Posts(props) {
  return (
    <div className="mb-16 mt-2">
      {placeData.map((item, index) => (
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
    </div>
  );
}
