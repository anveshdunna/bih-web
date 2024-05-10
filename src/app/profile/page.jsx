import PageTemplate from "@/components/PageTemplate";
import ProfileHeader from "./ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <PageTemplate>
      <div className="section">
        <div className="fixed-container flex-col">
          <ProfileHeader
            name="Anvesh Dunna"
            username="anveshdunna"
            followers={2}
            following={5}
            description="This is a slightly descriptive text talking about myself. This is a
          slightly descriptive text talking about myself. This is a slightly
          descriptive text talking about myself."
            website="www.bestinhere.com"
          />
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
          <div>Posts</div>
        </div>
      </div>
    </PageTemplate>
  );
}
