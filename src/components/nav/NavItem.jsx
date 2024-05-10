import Icon from "@/assets/Icon";
import Link from "next/link";

const NavItem = (props) => {
  const { name, iconName, link } = props;
  return (
    <Link
      href={link}
      className="flex flex-1 items-center justify-center gap-2 rounded-lg text-gray-11 hover:bg-gray-3 hover:text-gray-12 md:flex-none md:py-2 xl:justify-start xl:px-2"
    >
      <Icon name={iconName} />
      <div className="hidden text-subheadline font-semibold xl:block">
        {name}
      </div>
    </Link>
  );
};

export default NavItem;
