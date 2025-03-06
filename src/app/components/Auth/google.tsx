"use client";
import ProfileUser from "@/app/(pages)/profile/profile-user";
import { useSession, signIn } from "next-auth/react";


export default function Google() {
  const { data: session } = useSession();

  return (
    <div className="h-[calc(100dvh-64px)] w-full">
      {session ? (
        <div className="flex justify-center">
          <ProfileUser />
        </div>
      ) : (
          <div onClick={()=>signIn('google')} >login</div>
          
 
       
      )}
    </div>
  );
}
