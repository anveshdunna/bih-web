"use client";

import Icon from "@/assets/Icon";
import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = (props) => {
  const { name, iconName, link, isActive, layoutId } = props;

  return (
    <Link
      href={link}
      className={`relative flex flex-1 items-center justify-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-3 ${isActive ? "text-gray-12" : "text-gray-11"}`}
    >
      {iconName && <Icon name={`${iconName}${isActive ? "Solid" : ""}`} />}
      <div className="text-subheadline font-semibold">{name}</div>
      {isActive && (
        <motion.div
          layoutId={`id-${layoutId}`}
          className="absolute bottom-0 -mb-2 h-0.5 w-full bg-gray-12"
        ></motion.div>
      )}
    </Link>
  );
};

export default NavItem;
