import React from 'react';
import {Button} from "@/components/ui/button";
import {prisma} from "../../prisma/client";

async function DeletePost({params}) {
    // const post = await prisma.post.delete({
    //     where: {
    //         id: params.id,
    //     },
    // })
    return (
        <Button variant="destructive">
            Delete
        </Button>
    );
}

export default DeletePost;