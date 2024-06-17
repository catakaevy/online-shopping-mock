import Header from "./components/Header/Header";
import AuthHeroSection from "./components/AuthHeroSection";

export default function Index() {
  return (
    <body>
      <main className="flex min-h-screen flex-col bg-pink-100 text-slate-600">
        <div>
          <Header />
          <AuthHeroSection />
        </div>
      </main>
    </body>
  );
}
