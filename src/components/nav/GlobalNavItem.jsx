import Link from "next/link";

const GlobalNavItem = (props) => {
  const { name, link, isActive, children } = props;

  return (
    <Link
      href={link}
      className={`flex flex-1 items-center justify-center gap-2 rounded-lg text-subheadline font-semibold ${isActive ? "text-text-primary" : "text-text-secondary"} bg-fill-secondary transition hover:bg-fill-secondary-hover active:bg-fill-secondary-active md:flex-none md:justify-start md:px-2 md:py-2`}
    >
      {children}
      <div className="hidden md:block">{name}</div>
    </Link>
  );
};

export default GlobalNavItem;
