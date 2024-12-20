import React from "react";
import ContentBlock from "@/components/home-page/content-block";
import RecentlyPost from "@/components/home-page/recently-post";
import PostCard from "@/components/post-card";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const session = await getServerSession();
  if (!session) {
    return (
      <div className="flex  flex-col justify-center items-center h-screen">
        <h1>Please Log in First</h1>
        <Link href="api/auth/signin">Sign in</Link>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3">
      <div className="col-start-1 col-span-2">
        <ContentBlock className="m-2">
          <Link href="/dashboard/post-detail">
            <PostCard />
          </Link>
        </ContentBlock>
      </div>
      <div className="col-start-3 col-span-1">
        <ContentBlock className=" bg-blue-400 border-2 ml-2 mt-2 ">
          <RecentlyPost />a
        </ContentBlock>
      </div>
    </div>
  );
}
