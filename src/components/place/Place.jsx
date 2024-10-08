import Image from "next/image";
import { Button } from "../ui/button";
import IcMoreHorizontal20 from "@/assets/icons/MoreHorizontal20";
import IcList20 from "@/assets/icons/List20";
import Link from "next/link";
import IcBookmark20 from "@/assets/icons/Bookmark20";

function Place(props) {
  const { name, category, location, imgSrc } = props;
  return (
    <div className="relative flex items-center gap-3 rounded-xl px-6 py-3 transition hover:cursor-pointer hover:bg-fill-tertiary-hover active:bg-fill-tertiary-active lg:px-3">
      <Link
        className="absolute inset-0 z-0 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-[3px] focus-visible:ring-offset-bg"
        tabIndex="-1"
        href="https://www.google.com"
      ></Link>
      <div className="inside-border h-24 w-24 overflow-clip rounded-xl bg-surface-secondary">
        <Image
          alt=""
          src={imgSrc}
          className="h-full w-full object-cover"
          width={1200}
          height={1200}
        />
      </div>

      <div className="mr-3 min-w-0 flex-1 text-bodyMd">
        <div className="truncate text-ellipsis font-semibold">{name}</div>
        <div className="text-fg-secondary">{category}</div>
        <div className="text-fg-secondary">{location}</div>
      </div>

      <div className="z-10 -mx-1.5 flex gap-2">
        <Button variant="ghost" size="icon">
          <IcBookmark20 />
        </Button>
        <Button variant="ghost" size="icon">
          <IcMoreHorizontal20 />
        </Button>
      </div>
    </div>
  );
}

export default Place;
