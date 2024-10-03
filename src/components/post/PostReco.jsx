import Thumbnail from "../Thumbnail";

const PostReco = (props) => {
  const { placeName, placeCategory, placeImgSrc, placeThumbnail } = props;
  return (
    <div className="text-bodyMd">
      <div className="mb-1 text-bodyXs text-fg-secondary">Recommends</div>
      <div className="flex w-full gap-6 rounded-xl border border-border py-2 pl-3 pr-2">
        <div className="flex-1 py-0.5">
          <div className="font-semibold">{placeName}</div>
          <div className="flex items-baseline gap-1">
            <div className="text-bodyXs text-fg-secondary">for</div>
            <div className="">{placeCategory}</div>
          </div>
        </div>
        <Thumbnail
          imgSrc={placeImgSrc}
          type="photo"
          placeholder={placeThumbnail}
        />
      </div>
    </div>
  );
};

export default PostReco;
