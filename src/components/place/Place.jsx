import Image from "next/image";
import { Button } from "../ui/button";
import IcMoreHorizontal20 from "@/assets/icons/MoreHorizontal20";

function Place(props) {
  const { name, category, location, imgSrc } = props;
  return (
    <div className="flex flex-col gap-2 px-6 py-3">
      <div className="relative">
        <div className="inside-border h-60 overflow-clip rounded-xl bg-surface-secondary">
          <Image
            alt=""
            src={imgSrc}
            className="h-full w-full object-cover"
            width={1200}
            height={1200}
          />
        </div>
        <Button
          variant="ghost"
          className="absolute right-1 top-1 bg-blackA-3 text-fg-contrast hover:bg-blackA-4 active:bg-blackA-5"
          size="icon"
        >
          <IcMoreHorizontal20 />
        </Button>
      </div>

      <div className="text-bodyMd">
        <div className="font-semibold">{name}</div>
        <div className="text-fg-secondary">{category}</div>
        <div className="text-fg-secondary">{location}</div>
      </div>
    </div>
  );
}

export default Place;
