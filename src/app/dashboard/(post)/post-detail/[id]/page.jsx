import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import PostButton from "@/components/post-button";
import DeletePost from "@/components/delete-post";
import { ScrollArea } from "@/components/ui/scroll-area";
import {prisma} from "../../../../../../prisma/client";
export default async function PostDetail({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!post) return <div>.. No post Found!!!.</div>;
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <Card key={post.id} className="w-full max-w-4xl mx-auto mb-4">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage
              src={post.userImage || ""}
              alt={post.userName || "User"}
            />
            <AvatarFallback>
              {post.userName ? post.userName.charAt(0) : "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">
              {post.userName || "Anonymous"}
            </p>
            <p className="text-xs text-muted-foreground">
              Date: {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="items-end space-x-2">
            <PostButton actionType="edit" params={post.id} />
            <PostButton actionType="delete" params={post.id} />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-muted-foreground">{post.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="w-4 h-4 mr-2" />
            {/* {post.upvotes} */}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            {/* {post.comments} */}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            {/* {post.shares} */}
          </Button>
        </CardFooter>
      </Card>
    </ScrollArea>
  );
}
