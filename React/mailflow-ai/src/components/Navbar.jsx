import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="w-full px-6 md:px-12 xl:px-20 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <img
            src="/Logo.PNG"
            alt="JOAS AI"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover"
          />
          <span className="text-xl sm:text-3xl font-bold tracking-wide text-white">
            JOAS AI
          </span>
        </a>

        {/* Navigation - HIDDEN ON MOBILE/TABLETS, SHOWS ON DESKTOP */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-14 text-white text-[17px] font-medium ml-auto mr-10">
          <li>
            <a href="#solutions" className="hover:text-cyan-400 transition">
              Solutions
            </a>
          </li>
          <li>
            <a href="#partnership" className="hover:text-cyan-400 transition">
              Partnership
            </a>
          </li>
          <li>
            <a href="#process" className="hover:text-cyan-400 transition">
              Process
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden lg:flex ml-2 px-7 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition"
        >
          Book Demo
        </a>

        {/* Menu Icon - SHOWS ON MOBILE ONLY */}
        <button className="lg:hidden ml-auto text-white focus:outline-none" aria-label="Toggle Menu">
          <Menu size={28} />
        </button>

      </nav>
    </header>
  );
}