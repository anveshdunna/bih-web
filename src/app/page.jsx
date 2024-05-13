import PageTemplate from "@/components/PageTemplate";
import PostCard from "@/components/postCard/PostCard";

export default function Home() {
  return (
    <PageTemplate>
      <div className="section">
        <div className="fixed-container">
          <div className="flex flex-col">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
