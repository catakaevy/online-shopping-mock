import Link from "next/link";
import { createClient } from "../utils/supabase/server";

const AuthButtons = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    return (
      <div className="mt-10 flex-colum items-center justify-center gap-x-6">
        <p className="mb-10 bold text-black text-lg">
          Congratulation! You have been successfully already logged in!
        </p>
        <Link
          href="/home"
          className="rounded-md border border-black-500 bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Check out our menu!
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link
        href="/login"
        className="rounded-md border border-black-500 bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="text-sm font-semibold leading-6 text-white rounded-md border border-black-800 bg-blue-300 py-2 px-6 hover:border-indigo-300"
      >
        Signup
      </Link>
    </div>
  );
};

export default AuthButtons;
