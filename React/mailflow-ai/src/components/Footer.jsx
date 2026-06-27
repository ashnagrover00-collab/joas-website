import { Mail, Globe, ExternalLink, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 scroll-mt-24"
    >

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* LEFT */}

          <div className="max-w-xl">

            <h2 className="text-3xl font-bold">
              JOAS AI
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Helping organizations adopt Enterprise AI through consulting,
              deployment, implementation, training and long-term support.
            </p>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-5">

            <a
              href="https://lulal.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <Globe size={20} />
              Official Partner of Lulal AI
              <ExternalLink size={16} />
            </a>

            <a
              href="https://lulal.ai/lulal-ai-brochure-en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <FileText size={20} />
              Lulal AI Brochure
            </a>

            <a
              href="mailto:contact@joas.ai"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <Mail size={20} />
              contact@joas.ai
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © 2026 JOAS AI. All Rights Reserved.
          </p>

          <p>
            Official Partner of{" "}
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