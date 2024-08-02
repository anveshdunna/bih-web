"use client";

import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import NavItem from "@/components/ui/nav-item";
import { usePathname } from "next/navigation";

export default function ExploreLayout(props) {
  const { children } = props;

  return (
    <>
      <PageTemplate>
        <div className="section">
          <div className="fixed-container">
            <div className="w-full max-w-[640px]">
              <ExploreHeader />
              {children}
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

function ExploreHeader(props) {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 bg-material px-6 shadow-borderBottom backdrop-blur-xl lg:px-3">
      <div className="h-12"></div>
      <div className="text-title2 font-semibold">Activity</div>
      <div className="flex w-full py-2 shadow-borderBottom">
        <NavItem
          name="Trending"
          link={`/explore`}
          isActive={pathname === `/explore`}
          layoutId="exploretabs"
        />
        <NavItem
          name="Places"
          link={`/explore/places`}
          isActive={pathname.startsWith(`/explore/places`)}
          layoutId="exploretabs"
        />
        <NavItem
          name="People"
          link={`/explore/people`}
          isActive={pathname.startsWith(`/explore/people`)}
          layoutId="exploretabs"
        />
      </div>
    </div>
  );
}
