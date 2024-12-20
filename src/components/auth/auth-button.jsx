"use client";

import { Button } from "@/components/ui/button";
import { signOut, signIn, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SignInButton() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Button disabled>loading...</Button>;
  }
  if (status === "authenticated") {
    return (
      <div className="flex ">
        <p>{session.user.name}</p>
        <Avatar>
          <AvatarImage src={session.user.image} alt={session.user.name} />

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <SingOutButton />
      </div>
    );
  }

  return <Button onClick={() => signIn()}>Sign in</Button>;
}
export function SingOutButton() {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}
