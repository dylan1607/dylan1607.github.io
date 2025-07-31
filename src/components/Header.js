"use client";
import { useParallax, useScrollDirection } from "@/hooks/useParallax";

export default function Header() {
  const scrollY = useParallax();
  const scrollDirection = useScrollDirection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all bg-transparent p-4">
      <nav className="max-w-7xl px-4 md:px-6 shadow-xl rounded-xl backdrop-blur-[4px] backdrop-filter">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold transition-colors duration-300">
              Portfolio
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["About", "Projects", "Tech Stack", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:underline underline-offset-4"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              className={`focus:outline-none transition-colors duration-300 ${
                scrollY > 50
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white hover:text-white/80"
              }`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
