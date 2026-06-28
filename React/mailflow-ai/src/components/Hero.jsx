import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();  

  setLoading(true);  

  const form = new FormData(e.target);

  const data = Object.fromEntries(form);

  try {

    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
      },
      "YOUR_PUBLIC_KEY"
    );

    setSuccess(true);
    e.target.reset();

  } catch (err) {
    alert("Failed to send. Please try again.");
  }

  setLoading(false);
};

  return (
    <>
        <section   
          id="home"
           className="relative min-h-screen flex items-start  overflow-hidden bg-[#050816]"
        >  

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute -top-64 -left-64 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

          <div className="absolute -bottom-64 -right-64 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[200px]" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <div>

            <div className="inline-flex items-center gap-1 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-8">

             <span>Global Partner of</span>

            <a
              href="https://lulal.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-white transition"
            >
              Lulal AI ↗
            </a>

            </div>

            <motion.h1
            className="text-4xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity:0,x:-40 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            >

              Your

              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">

                Digital Workforce

              </span>

              <span className="block mt-2">

                Starts Here

              </span>

            </motion.h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-lg">

              Deploy AI assistants that answer questions, automate repetitive
              tasks, analyze documents, support your teams and integrate
              seamlessly into your business—giving you a reliable digital
              workforce that works 24/7.

            </p>

            <div className="mt-10">

              <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold transition hover:scale-105"
              >
                Book Consultation
              </button>

              

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center items-center px-6">

            <div className="relative w-[620px] h-[620px] flex items-center justify-center">

              {/* Outer Ring */}

              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin"
                   style={{ animationDuration: "35s" }}>
              </div>

              {/* Second Ring */}

              <div
                className="absolute inset-10 rounded-full border border-cyan-400/30 animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "22s",
                }}
              >
              </div>

              {/* Glow */}

              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-400/20 blur-xl">
              </div>

              {/* Circle Panel */}

              <div className="absolute inset-[88px] rounded-full border border-cyan-400/40 bg-[#09111f]/90 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,.15)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-14">

                  {/* First */}

                  <div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                      Your Personal
                    </h2>

                    <h2 className="text-3xl lg:text-4xl font-bold mt-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      AI Assistant
                    </h2>

                  </div>

                  <div className="w-40 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-6"></div>

                  {/* Second */}

                  <div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                      Everything
                    </h2>

                    <h2 className="text-3xl lg:text-4xl font-bold mt-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      You Need
                    </h2>

                  </div>

                  <div className="w-40 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-6"></div>

                  {/* Third */}

                  <div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                      One Click
                    </h2>

                    <h2 className="text-3xl lg:text-4xl font-bold mt-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Away
                    </h2>

                  </div>

                </div>

              </div>

              {/* Orbit Dot */}

              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

              <div className="absolute bottom-10 left-16 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]"></div>

              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

              <div className="absolute bottom-16 right-20 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]"></div>

            </div>

          </div>

        </div>

      </section>
      {/* CONTACT POPUP */}

      {open && (
        <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
  onClick={() => setOpen(false)}
>

          <div
  className="relative w-full max-w-lg rounded-[28px] border border-cyan-500/20 bg-[#0B1120] p-8 shadow-[0_0_60px_rgba(34,211,238,.15)]"
  onClick={(e) => e.stopPropagation()}
>

            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-5 text-4xl text-gray-400 hover:text-white transition"
            >
              ×
            </button>

            <p className="uppercase tracking-[4px] text-cyan-400 text-sm mb-3">
              CONTACT US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready To Start?
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              Tell us about your business and we'll help you discover how AI
              can automate workflows, improve productivity and accelerate
              growth.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-4 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Business Email"
                required
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-4 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-4 outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full rounded-xl bg-[#111827] border border-white/10 p-4 outline-none resize-none focus:border-cyan-400 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-5 bg-gradient-to-r from-blue-600 to-cyan-400 font-semibold text-lg hover:scale-[1.02] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request Consultation"}
              </button>

              {success && (
                <p className="text-center text-green-400 font-medium">
                  ✅ Your request has been sent successfully!
                </p>
              )}

            </form>

          </div>

        </div>
      )}
          </>
  );
}