import Image from "next/image";
import IcLocation16 from "@/assets/icons/Location16";

export default function Thumbnail(props) {
  const { type, placeholder, imgSrc } = props;
  return (
    <div className="inside-border relative flex h-10 w-10 items-center justify-center overflow-hidden rounded bg-surface-secondary text-icon-secondary">
      {type === "photo" &&
        (!placeholder ? (
          <Image
            alt=""
            src={imgSrc}
            className="h-full w-full object-cover"
            fill={true}
          />
        ) : (
          <IcLocation16 />
        ))}

      {type === "place" &&
        (!placeholder ? (
          <Image
            alt=""
            src={imgSrc}
            className="h-full w-full object-cover"
            fill={true}
          />
        ) : (
          <IcLocation16 />
        ))}
    </div>
  );
}
