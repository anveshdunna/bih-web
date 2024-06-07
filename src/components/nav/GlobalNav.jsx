"use client";

import { Button } from "../ui/button";
import GlobalNavItem from "./GlobalNavItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Icon from "@/assets/Icon";
import { usePathname } from "next/navigation";
import checkWindowWidth from "@/hooks/checkWindowWidth";
import CreateNewButton from "./CreateNewButton";
import IcHeart20 from "@/assets/icons/Heart20";
import IcPost24 from "@/assets/icons/Post24";
import IcHome24 from "@/assets/icons/Home24";
import IcHome24Bold from "@/assets/icons/Home24Bold";
import IcSearch24 from "@/assets/icons/Search24";
import IcSearch24Bold from "@/assets/icons/Search24Bold";
import IcBell24 from "@/assets/icons/Bell24";
import IcBell24Bold from "@/assets/icons/Bell24Bold";
import IcPlusSquare24 from "@/assets/icons/PlusSquare24";
import IcPlus24 from "@/assets/icons/Plus24";
import { useState } from "react";
import NewPost from "../dialog/NewPost";

export default function GlobalNav(props) {
  const [isDesktop, isMobile] = checkWindowWidth();
  const demoProfile = "anveshdunna";
  const pathname = usePathname();
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [isNewListOpen, setIsNewListOpen] = useState(false);
  const newPostDialog = () => setIsNewPostOpen(!isNewPostOpen);
  const newListDialog = () => setIsNewListOpen(!isNewListOpen);

  return (
    <>
      <nav className="fixed bottom-0 flex h-16 w-full gap-1 bg-material px-2 py-2 backdrop-blur-xl md:top-0 md:h-full md:w-60 md:flex-col md:justify-start md:px-3 md:py-3">
        {/* Home link */}
        <GlobalNavItem name="Home" link="/" isActive={pathname === "/"}>
          {pathname === "/" ? <IcHome24Bold /> : <IcHome24 />}
        </GlobalNavItem>

        {/* Explore link */}
        <GlobalNavItem
          name="Explore"
          link="/explore"
          isActive={pathname.startsWith("/explore")}
        >
          {pathname.startsWith("/explore") ? (
            <IcSearch24Bold />
          ) : (
            <IcSearch24 />
          )}
        </GlobalNavItem>

        {/* Create new - Mobile */}
        {isMobile && (
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-full flex-1 items-center rounded-lg p-0 md:hidden"
                type="button"
                aria-label="Create..."
              >
                <IcPlusSquare24 />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Create new</DrawerTitle>
              </DrawerHeader>
              <div className="flex justify-center gap-6 pb-6">
                <CreateNewButton name="Post" iconName="home" />
                <CreateNewButton name="List" iconName="home" />
              </div>
            </DrawerContent>
          </Drawer>
        )}

        {/* Activity link */}
        <GlobalNavItem
          name="Activity"
          link="/activity"
          isActive={pathname.startsWith("/activity")}
        >
          {pathname.startsWith("/activity") ? <IcBell24Bold /> : <IcBell24 />}
        </GlobalNavItem>

        {/* Profile link */}
        <GlobalNavItem
          name="Profile"
          link={`/${demoProfile}`}
          isActive={pathname.startsWith(`/${demoProfile}`)}
        >
          {pathname.startsWith(`/${demoProfile}`) ? (
            <IcHome24Bold />
          ) : (
            <IcHome24 />
          )}
        </GlobalNavItem>

        {/* Create new - Desktop */}
        {isDesktop && (
          <div className="flex flex-col gap-1">
            <CreatePostTrigger onTrigger={newPostDialog} />
            <Button variant="outline" className="justify-start px-2" size="lg">
              <IcPost24 />
              New list
            </Button>
          </div>
        )}
      </nav>
      <NewPost isOpen={isNewPostOpen} onOpenChange={setIsNewPostOpen} />
    </>
  );
}

function CreatePostTrigger(props) {
  const { onTrigger } = props;
  return (
    <Button
      variant="outline"
      className="justify-start px-2"
      size="lg"
      onClick={onTrigger}
    >
      <IcPost24 />
      New post
    </Button>
  );
}

{
  /* <Dialog>
  <DialogTrigger asChild>
    <Button
      variant="outline"
      size="lg"
      className="hidden items-center justify-start gap-2 p-2 md:flex"
      type="button"
    >
      <Icon name="plus" />
      Create...
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:rounded-3xl">
    <DialogHeader>
      <DialogTitle className="text-title3">Create new... </DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>; */
}
