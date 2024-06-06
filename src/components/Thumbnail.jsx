import Image from "next/image";
import IcLocation16 from "@/assets/icons/Location16";

function Thumbnail(props) {
  const { type, img } = props;
  return (
    <div className="inside-border bg-surface-secondary relative flex h-10 w-10 items-center justify-center overflow-clip rounded text-icon-secondary">
      {type === "photo" && (
        <>
          <Image
            alt=""
            src={img}
            className="h-full w-full object-cover"
            width="80"
            height="80"
          />
        </>
      )}
      {type === "place" && <IcLocation16 />}
    </div>
  );
}

export default Thumbnail;
