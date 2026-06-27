import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center">

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute w-[700px] h-[700px] rounded-full bg-blue-600 blur-[180px] opacity-20 -top-60 -left-52"></div>

          <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-400 blur-[200px] opacity-20 bottom-0 right-0"></div>

        </div>

        {/* Hero Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 mb-8">
              Official Partner of Lulal AI
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">

  Your

  <span className="block text-blue-400">
    Digital Workforce
  </span>

  <span className="block">
    Starts Here
  </span>

</h1>

            <p className="mt-8 text-xl text-gray-300 leading-9 max-w-xl">
  Deploy AI assistants that answer questions, automate repetitive tasks,
  analyze documents, support your teams, and integrate seamlessly into
  your business—giving you a reliable digital workforce that works
  24/7.
</p>

            <div className="flex gap-5 mt-10">

              <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition flex items-center gap-2">
                Explore
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

          {/* Right */}

          {/* Right */}

<div className="flex justify-center items-center">

  <div className="relative w-[560px] h-[560px]">

    {/* Outer Orbit */}
    <div className="absolute inset-0 rounded-full border border-blue-500/30"></div>

    {/* Main Glowing Circle */}
    <div className="absolute inset-8 rounded-full border border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.25)] bg-gradient-to-br from-[#08101d] to-[#07121f]"></div>

    {/* Orbit Dots */}
    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_25px_#3b82f6]"></div>

    <div className="absolute bottom-5 left-24 w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_25px_#3b82f6]"></div>

    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_25px_#22d3ee]"></div>

    {/* Content */}

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-16">

      <div className="mb-12 w-full">

        <h3 className="text-5xl font-bold text-white">
          Your Personal
        </h3>

        <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          AI Assistant
        </h3>

      </div>

      <div className="w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12"></div>

      <div className="mb-12 w-full">

        <h3 className="text-5xl font-bold text-white">
          Everything
        </h3>

        <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          You Need
        </h3>

      </div>

      <div className="w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12"></div>

      <div>

        <h3 className="text-5xl font-bold text-white">
          One Click
        </h3>

        <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Away
        </h3>

      </div>

    </div>

  </div>

</div>
</section>
      {/* CONTACT POPUP */}

      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6">

          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B1120] border border-blue-500/20 p-8 shadow-2xl">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-5 text-4xl text-gray-400 hover:text-white"
            >
              ×
            </button>

            <p className="text-blue-400 uppercase tracking-[4px] mb-3">
              CONTACT US
            </p>

            <h2 className="text-5xl font-bold mb-4">
              Ready To Start?
            </h2>

            <p className="text-gray-400 mb-10">
              Get in touch with our experts to discuss your AI transformation journey.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-5 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Business Email"
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-5 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-5 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-5 outline-none resize-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 text-lg font-semibold hover:scale-[1.02] transition"
              >
                Request Consultation
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}