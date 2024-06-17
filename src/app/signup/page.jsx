import { redirect } from "next/navigation";
import Header from "../components/Header/Header";
import { headers } from "next/headers";
import Link from "next/link";
import { createClient } from "../utils/supabase/server";

export default async function Signup({ searchParams }) {
  // when you logged in & use sessions
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/home");
  }
  const signUp = async (formData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      redirect("/signup?message=Passwords do not match");
    }

    // server client supabase
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      //   console.log(error);
      redirect("/signup?message=Could not authenticate user");
    }
    redirect(
      `/confirm?message=Check confirmation Email(${email}) to continue sign in process`
    );
  };
  return (
    <main className="min-h-screen bg-pink-100 text-slate-700">
      <div>
        <Header />

        <Link
          href="/"
          className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
        >
          Home
        </Link>

        <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
          <form
            action={signUp}
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
            <label className="text-md" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border-2 border-green-500 mb-6"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              required
            />
            <button className="bg-indigo-700 rounded-md px-4 py-2 text-white mb-2">
              Sign up
            </button>

            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </form>

          <Link
            href="/signup"
            className="rounded-md no-underline text-foreground text-sm hover:text-slate-500"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
