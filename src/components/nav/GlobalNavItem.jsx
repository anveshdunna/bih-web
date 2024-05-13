import Icon from "@/assets/Icon";
import Link from "next/link";

const GlobalNavItem = (props) => {
  const { name, iconName, link, isActive } = props;

  return (
    <Link
      href={link}
      className={`flex flex-1 items-center justify-center gap-2 rounded-lg ${isActive ? "text-gray-12" : "text-gray-11"} transition hover:bg-gray-3 md:flex-none md:py-2 xl:justify-start xl:px-2`}
    >
      {iconName && <Icon name={`${iconName}${isActive ? "Solid" : ""}`} />}
      <div className="hidden text-subheadline font-semibold xl:block">
        {name}
      </div>
    </Link>
  );
};

export default GlobalNavItem;
