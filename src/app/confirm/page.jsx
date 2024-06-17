import Header from "../components/Header/Header";

export default function Signup({ searchParams }) {
  return (
    <div className="min-h-screen bg-pink-100 text-slate-700">
      <Header />

      <div className="w-full px-8 sm:max-w-lg mx-auto mt-8">
        <p className="text-foreground">{searchParams.message}</p>
      </div>
    </div>
  );
}
