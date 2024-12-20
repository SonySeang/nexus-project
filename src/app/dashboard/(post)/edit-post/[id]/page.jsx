import React from "react";
import PostForm from "@/components/post-form";
import {prisma} from "../../../../../../prisma/client";

export default async function EditPost({params}) {
    const post = await prisma.post.findUnique({
        where: {
            id: params.id,
        },
    });
    return (
        <div>
            <PostForm actionType="edit" params={post}/>
        </div>
    );
}
