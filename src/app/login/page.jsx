import { createClient } from "../utils/supabase/server";
import Header from "../components/Header/Header";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login({ searchParams }) {
  // when you logged in & use sessions
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/home");
  }

  const login = async (formData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      redirect("/login?message=Could not authenticate user");
    }
    redirect("/");
    // redirect("/home");
  };
  return (
    <div className="min-h-screen bg-pink-100 text-slate-700">
      <Header />

      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
      >
        Home
      </Link>

      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          action={login}
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border-2 border-green-500 mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border-2 border-green-500 mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="bg-indigo-700 rounded-md px-4 py-2 text-white mb-2">
            Sign In
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>

        <Link
          href="/forgot-password"
          className="rounded-md no-underline text-indigo-400 text-sm "
        >
          Forgotten Password.
        </Link>

        <br />
        <br />

        <Link
          href="/signup"
          className="rounded-md no-underline text-black text-sm hover:text-slate-500"
        >
          Need to have an Account? Sign Up
        </Link>
      </div>
    </div>
  );
}
