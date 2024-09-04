import Link from "next/link";
import { toStringLowerCase } from "@/lib/stringUtils";

export default function ProfileName(props) {
  const { name } = props;
  return (
    <Link
      className="z-10 min-w-0 max-w-max flex-1 truncate whitespace-nowrap rounded-sm font-semibold outline outline-2 outline-offset-2 outline-transparent  transition-[outline-color] hover:underline focus-visible:outline-ring"
      href={`/${toStringLowerCase(name)}`}
    >
      {name}
    </Link>
  );
}
