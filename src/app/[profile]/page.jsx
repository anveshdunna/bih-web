import PageTemplate from "@/components/PageTemplate";
import ProfileHeader from "./ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/postCard/PostCard";

export default function Profile(props) {
  return (
    <>
      <div className="flex flex-col">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}
