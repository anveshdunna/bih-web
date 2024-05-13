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
import Icon from "@/assets/Icon";
import { usePathname } from "next/navigation";
import checkWindowWidth from "@/hooks/checkWindowWidth";

const GlobalNav = (props) => {
  const [isDesktop, isMobile] = checkWindowWidth();
  const demoProfile = "anveshdunna";
  const pathname = usePathname();

  return (
    <>
      <nav className="shadow-borderTop md:shadow-borderRight fixed bottom-0 flex h-16 w-full gap-1 bg-white px-4 md:top-0 md:h-full md:w-16 md:flex-col md:justify-start md:px-2 md:py-2 xl:w-60">
        <GlobalNavItem
          name="Home"
          iconName="home"
          link="/"
          isActive={pathname === "/"}
        />
        <GlobalNavItem
          name="Explore"
          iconName="search"
          link="/explore"
          isActive={pathname.startsWith("/explore")}
        />
        {isMobile && (
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-full flex-1 items-center rounded-lg p-0 md:hidden"
                type="button"
                aria-label="Create..."
              >
                <Icon name="plusSquare" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}

        <GlobalNavItem
          name="Activity"
          iconName="bell"
          link="/activity"
          isActive={pathname.startsWith("/activity")}
        />
        <GlobalNavItem
          name="Profile"
          iconName="home"
          link={`/${demoProfile}`}
          isActive={pathname.startsWith(`/${demoProfile}`)}
        />
        {isDesktop && (
          <Dialog>
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
                <DialogTitle className="text-title3">
                  Create new...{" "}
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </nav>
    </>
  );
};

export default GlobalNav;
