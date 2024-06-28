import Link from "next/link";

const GlobalNavItem = (props) => {
  const { name, link, isActive, children } = props;

  return (
    <Link
      href={link}
      className={`flex flex-1 items-center justify-center rounded-lg text-subheadline font-semibold ${isActive ? "text-text-primary" : "text-text-secondary"} bg-fill-secondary transition hover:bg-fill-secondary-hover active:bg-fill-secondary-active md:h-12 md:flex-none`}
    >
      {children}
    </Link>
  );
};

export default GlobalNavItem;
