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
          <main className="h-[calc(100dvh-64px)] w-full bg-[#b4b4b4] flex justify-center items-center">
              <section className="w-[80%] max-w-[350px] h-[50%] max-h-[400px] bg-[#d1d1d1] flex justify-center">
                <button className="w-[80%] h-[50px] border border-[black] mt-6 hover:bg-[#b8b7b7] transition-all" onClick={()=>signIn('signin')}>login in with Google</button>
              </section>
          </main>
      )}
    </div>
  );
}
