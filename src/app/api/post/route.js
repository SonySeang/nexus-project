import { NextResponse } from "next/server";

import {postSchema} from "@/lib/validationSchema";
import { NextRequest } from "next/server";
import {prisma} from "../../../../prisma/client";

export async function POST(NextRequest) {
  const body = await NextRequest.json();
  //validate the request body

  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(newPost, { status: 201 });
}

export async  function  GET(NextRequest) {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts, { status: 200 });
}