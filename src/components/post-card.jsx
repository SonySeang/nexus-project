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

export default function PostCard({ actionType }) {
  return (
    <ScrollArea>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src={""} alt="user name" />
            {/*<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>*/}
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Seang Sony</p>
            <p className="text-xs text-muted-foreground">Date : 2024 </p>
          </div>
          <div className=" items-end space-x-2">
            {actionType === "edit" && <PostButton actionType="edit" />}
            {actionType === "edit" && <DeletePost />}
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-bold">Ai Is Human</h2>
          <p className="text-muted-foreground">loram lasdfasdkfalds</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="w-4 h-4 mr-2" />
            {/*{upvotes}*/}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            {/*{comments}*/}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            {/*{shares}*/}
          </Button>
        </CardFooter>
      </Card>
    </ScrollArea>
  );
}
