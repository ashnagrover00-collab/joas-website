import { Mail, Globe, ExternalLink, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 scroll-mt-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        
        {/* Upper Grid Split Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-12">

          {/* LEFT CONTAINER BRANDING */}
          <div className="max-w-xl w-full text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
              JOAS AI
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-6 sm:leading-8">
              Helping organizations adopt Enterprise AI through consulting,
              deployment, implementation, training and long-term support.
            </p>
          </div>

          {/* RIGHT CONTAINER USEFUL LINKS */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full sm:w-auto items-center lg:items-start">
            <a
              href="https://lulal.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition"
            >
              <Globe size={18} className="flex-shrink-0" />
              <span>Global Partner of Lulal AI</span>
              <ExternalLink size={14} className="flex-shrink-0" />
            </a>

            <a
              href="https://lulal.ai/lulal-ai-brochure-en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition"
            >
              <FileText size={18} className="flex-shrink-0" />
              <span>Lulal AI Brochure</span>
            </a>

            <a
              href="mailto:contact@joas.ai"
              className="flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition"
            >
              <Mail size={18} className="flex-shrink-0" />
              <span>contact@joas.ai</span>
            </a>
          </div>

        </div>

        {/* Lower Sub-Footer Credits Block */}
        <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs sm:text-sm text-center sm:text-left">
          <p>
            © 2026 JOAS AI. All Rights Reserved.
          </p>
          <p>
            Global Partner of{" "}
            <a
              href="https://lulal.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Lulal AI
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}