"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

function PostButton({actionType}) {
    const router = useRouter()
    if (actionType === "create") {
        return <Button variant="secondary" onClick={() => router.push('/dashboard/create-post')}>Create </Button>
    }
    if (actionType === "edit") {
        return <Button variant="default" onClick={() => router.push('/dashboard/edit-post')}>Edit</Button>
    }

}

export default PostButton;