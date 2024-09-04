"use client";

import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import NavItem from "@/components/ui/nav-item";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";

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
    <div className="sticky top-0 z-20 bg-material-thick px-6 pt-4 shadow-borderBottom backdrop-blur-xl lg:px-3">
      <Input
        type="search"
        placeholder="Search..."
        className=""
        // className="bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]"
      />
      <div className="flex w-full py-2 shadow-borderBottom">
        <NavItem
          name="Trending"
          link={`/explore`}
          isActive={pathname === `/explore`}
          layoutId="exploretabs"
        />
        <NavItem
          name="Posts"
          link={`/explore/posts`}
          isActive={pathname === `/explore/posts`}
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
