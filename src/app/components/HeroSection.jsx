import React from "react";

const HeroSection = () => {
  function HeroSectionItem({ imageUrl, title, description }) {
    return (
      <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat">
        <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
          <span className="block text-white">{title}</span>
          <span className="block text-white text-xl md:text-3xl">
            {description}
          </span>
          <div className="mt-5">
            <a
              href="#"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              Read Case Studies
            </a>
          </div>
        </div>
      </div>
    );
  }

  function HeroSection() {
    return (
      <div className="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
        {/* Item 1 */}
        <HeroSectionItem
          imageUrl="https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Nike React"
          description="Rewriting sport's playbook for billions of athletes"
        />

        {/* Item 2 */}
        <HeroSectionItem
          imageUrl="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="CoolApps"
          description="Your description for CoolApps"
        />
      </div>
    );
  }
};

export default HeroSection;
