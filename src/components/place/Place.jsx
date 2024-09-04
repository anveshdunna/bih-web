import Image from "next/image";
import { Button } from "../ui/button";
import IcMoreHorizontal20 from "@/assets/icons/MoreHorizontal20";
import IcList20 from "@/assets/icons/List20";
import Link from "next/link";

function Place(props) {
  const { name, category, location, imgSrc } = props;
  return (
    <div className="px-6 py-3">
      <div className="relative">
        <Link
          className="absolute inset-0 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-[3px] focus-visible:ring-offset-bg"
          href="https://www.google.com"
        ></Link>
        <div className="inside-border h-60 overflow-clip rounded-xl bg-surface-secondary">
          <Image
            alt=""
            src={imgSrc}
            className="h-full w-full object-cover"
            width={1200}
            height={1200}
          />
        </div>

        <div className="my-2 mr-24 text-bodyMd">
          <div className="font-semibold">{name}</div>
          <div className="text-fg-secondary">{category}</div>
          <div className="text-fg-secondary">{location}</div>
        </div>

        <div className="absolute right-0 top-60 -mx-1.5 mt-0.5 flex gap-2">
          <Button variant="ghost" size="icon">
            <IcList20 />
          </Button>
          <Button variant="ghost" size="icon">
            <IcMoreHorizontal20 />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Place;
