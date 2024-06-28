import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function ActivityLayout(props) {
  const { children } = props;
  return (
    <>
      <PageTemplate>
        <div className="section">
          <div className="fixed-container">
            <div className="w-full max-w-[640px]">
              <ActivityHeader />
              {children}
            </div>
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

function ActivityHeader(props) {
  return (
    <div className="sticky top-0 z-10 bg-material px-6 shadow-borderBottom backdrop-blur-xl lg:px-3">
      <div className="h-12"></div>
      <div className="text-title2 font-semibold">Activity</div>
      <div className="flex gap-2 py-4">
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/activity"
        >
          All
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/activity/follows"
        >
          Follows
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/activity/comments"
        >
          Comments
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/activity/replies"
        >
          Replies
        </Link>
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/activity/mentions"
        >
          Mentions
        </Link>
      </div>
    </div>
  );
}
