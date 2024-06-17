import React from "react";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const HeroSection = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    const {} = await supabase.auth.signOut();
    redirect("/login");
  };
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello!{" "}
              {session ? (
                <span className="text-medium">{session.user.email}</span>
              ) : (
                <span className="text-medium">
                  <br />
                  Welcome to our page!
                </span>
              )}
            </span>
            <br />
          </h1>
          <div className="flex flex-row justify-between">
            <p className="text-slate-600 text-base sm:text-xl mb-4">
              Welcome to our secret restaurant website. Feel free to check out
              our Takoyaki menu and order! Sign up now to receive exclusive
              discounts! Stay updated with our special events and never miss out
              on great deals. If you haven&apos;t registered yet, don&apos;t
              wait!
            </p>
            <div className="col-span-5 mt-5 mb-6 lg:mt-0">
              <Image
                src="/images/sakura_wood_fubuki_6765.png"
                alt="hero image"
                className=""
                width={250}
                height={250}
              />
            </div>
          </div>
          <div className="mb-5 flex flex-row">
            {session ? (
              <form action={signOut}>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 font-semibold text-white">
                  Logout
                </button>
              </form>
            ) : (
              <>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 font-semibold text-white">
                  <Link href="/login">Sign In</Link>
                </button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 font-semibold text-black mt-3">
                  <Link href="/signup">
                    <span className="block bg-pink-300 hover:bg-pink-200 rounded-full px-5 py-2">
                      Sign Up
                    </span>
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
