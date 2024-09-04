"use client";

import Icon from "@/assets/Icon";
import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = (props) => {
  const { name, iconName, link, isActive, layoutId } = props;

  return (
    <Link
      href={link}
      className={`relative flex h-8 flex-1 items-center justify-center gap-2 rounded-lg px-2 transition hover:bg-fill-secondary-hover active:bg-fill-secondary-active ${isActive ? "text-fg" : "text-fg-secondary"}`}
    >
      {iconName && <Icon name={`${iconName}${isActive ? "Solid" : ""}`} />}
      <div className="text-bodyMd font-semibold">{name}</div>
      {isActive && (
        <motion.div
          layoutId={`id-${layoutId}`}
          className="absolute bottom-0 -mb-2 h-0.5 w-full bg-fill-neutral"
        ></motion.div>
      )}
    </Link>
  );
};

export default NavItem;
