import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="w-full px-12 xl:px-20 h-20 flex items-center">

  {/* Logo */}

  <a href="#" className="flex items-center gap-4 flex-shrink-0">

    <img
      src="/Logo.PNG"
      alt="JOAS AI"
      className="w-14 h-14 rounded-2xl object-cover"
    />

    <span className="text-3xl font-bold tracking-wide text-white">
      JOAS AI
    </span>

  </a>

  {/* Navigation */}

  <ul className="flex items-center gap-14 text-white text-[17px] font-medium ml-auto mr-10">

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

  {/* CTA */}

  <a
    href="#contact"
    className="hidden lg:flex ml-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition"
  >
    Book Demo
  </a>

  <Menu className="lg:hidden ml-auto text-white" />

</nav>
    </header>
  );
}