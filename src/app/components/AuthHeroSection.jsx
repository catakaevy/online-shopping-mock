import AuthButtons from "./AuthButtons";

const AuthHeroSection = () => {
  return (
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-500 bg-pink-100 sm:text-6xl">
              Welcome to our authenticate page!
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              Get discount the discounts for our foods!
            </p>

            <AuthButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHeroSection;
