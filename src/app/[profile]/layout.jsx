"use client";

import PageTemplate from "@/components/PageTemplate";
import ProfileHeader from "./ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavItem from "@/components/ui/nav-item";
import { usePathname } from "next/navigation";

export default function ProfileLayout(props) {
  const { children, params } = props;
  const currentProfile = params.profile;
  const pathname = usePathname();
  return (
    <>
      <PageTemplate>
        <div className="section">
          <div className="fixed-container">
            <div className="w-full max-w-[640px]">
              <ProfileHeader
                name="Anvesh Dunna"
                username={params.profile}
                followers={2}
                following={5}
                description="This is a slightly descriptive text talking about myself. This is a slightly descriptive text talking about myself. This is a slightly descriptive text talking about myself."
                website="www.bestinhere.com"
              />
              <div className="shadow-borderBottom flex w-full py-2">
                <NavItem
                  name="Posts"
                  link={`/${currentProfile}`}
                  isActive={pathname === `/${currentProfile}`}
                  layoutId="profiletabs"
                />
                <NavItem
                  name="Lists"
                  link={`/${currentProfile}/lists`}
                  isActive={pathname.startsWith(`/${currentProfile}/lists`)}
                  layoutId="profiletabs"
                />
                <NavItem
                  name="Plans"
                  link={`/${currentProfile}/plans`}
                  isActive={pathname.startsWith(`/${currentProfile}/plans`)}
                  layoutId="profiletabs"
                />
              </div>
              {children}
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}
