"use client";

import { Button } from "../ui/button";
import NavItem from "./NavItem";
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
import Icon from "@/assets/Icon";
import useMediaQuery from "@/hooks/useMediaQuery";

const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <nav className="fixed bottom-0 flex h-16 w-full gap-1 border-t border-gray-7 bg-white px-4 md:top-0 md:h-full md:w-16 md:flex-col md:justify-start md:border-r md:border-t-0 md:px-2 md:py-2 xl:w-60">
        <NavItem name="Home" iconName="home" link="/" />
        <NavItem name="Explore" iconName="search" link="/explore" />
        {!isDesktop && (
          <Button
            variant="ghost"
            className="flex h-full flex-1 items-center p-0 md:hidden"
            type="button"
            aria-label="Create..."
          >
            <Icon name="plusSquare" />
          </Button>
        )}

        <NavItem name="Activity" iconName="bell" link="/activity" />
        <NavItem name="Profile" iconName="home" link="/profile" />
        {isDesktop && (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-start gap-2 p-2"
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

export default Nav;
