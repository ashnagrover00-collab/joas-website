import { useState } from "react";
import emailjs from "@emailjs/browser";
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
        "service_sslbt17",
        "template_mc3c09e",
        {
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
        },
        "h1KwO6Um28Z6zIKfs"
      );
      setSuccess(true);
      e.target.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert(`Failed to send: ${err.text || err.message || "Unknown error"}`);
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @keyframes orbitOuter {
          from { transform: rotate(0deg)   translateY(-145px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateY(-145px) rotate(-360deg);}
        }
        @keyframes orbitOuter2 {
          from { transform: rotate(180deg) translateY(-145px) rotate(-180deg);}
          to   { transform: rotate(540deg) translateY(-145px) rotate(-540deg);}
        }
        @keyframes orbitInner {
          from { transform: rotate(0deg)    translateY(-120px) rotate(0deg);  }
          to   { transform: rotate(-360deg) translateY(-120px) rotate(360deg);}
        }
        @keyframes orbitInner2 {
          from { transform: rotate(180deg)  translateY(-120px) rotate(-180deg);}
          to   { transform: rotate(-180deg) translateY(-120px) rotate(180deg); }
        }

        @media (min-width: 1024px) {
          @keyframes orbitOuter {
            from { transform: rotate(0deg)   translateY(-315px) rotate(0deg);   }
            to   { transform: rotate(360deg) translateY(-315px) rotate(-360deg);}
          }
          @keyframes orbitOuter2 {
            from { transform: rotate(180deg) translateY(-315px) rotate(-180deg);}
            to   { transform: rotate(540deg) translateY(-315px) rotate(-540deg);}
          }
          @keyframes orbitInner {
            from { transform: rotate(0deg)    translateY(-265px) rotate(0deg);  }
            to   { transform: rotate(-360deg) translateY(-265px) rotate(360deg);}
          }
          @keyframes orbitInner2 {
            from { transform: rotate(180deg)  translateY(-265px) rotate(-180deg);}
            to   { transform: rotate(-180deg) translateY(-265px) rotate(180deg); }
          }
        }

        @keyframes spinCW  { from{transform:rotate(0deg)}  to{transform:rotate(360deg)}  }
        @keyframes spinCCW { from{transform:rotate(0deg)}  to{transform:rotate(-360deg)} }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#050816] py-16 lg:py-0"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 lg:-top-64 lg:-left-64 w-[350px] lg:w-[700px] h-[350px] lg:h-[700px] rounded-full bg-blue-600/20 blur-[100px] lg:blur-[180px]" />
          <div className="absolute -bottom-32 -right-32 lg:-bottom-64 lg:-right-64 w-[350px] lg:w-[700px] h-[350px] lg:h-[700px] rounded-full bg-cyan-500/20 blur-[100px] lg:blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* LEFT SIDE CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-1 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm mb-6 lg:mb-8">
              <span>Global Partner of</span>
              <a href="https://lulal.ai/" target="_blank" rel="noopener noreferrer"
                className="font-semibold underline hover:text-white transition">
                Lulal AI ↗
              </a>
            </div>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                Digital Workforce
              </span>
              <span className="block mt-2">Starts Here</span>
            </motion.h1>

            <p className="mt-6 lg:mt-8 mb-6 text-[22px] sm:text-[26px] font-bold text-cyan-400 leading-8 max-w-lg mx-auto lg:mx-0">
            Every task. Another tab. Another AI tool. Tired of it?
           </p>

            <p className="mt-3 text-[17px] sm:text-[18px] font-semibold text-gray-300 leading-7 max-w-lg mx-auto lg:mx-0">
  JOAS AI brings powerful AI into the tools your team already uses—helping you write emails, analyze documents, automate tasks and work faster without changing the way you work. Choose the AI model that fits your business, from leading LLMs to your own private AI.
</p>

            <div className="mt-8 lg:mt-10">
              <button
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold transition hover:scale-105"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* RIGHT SIDE GRAPHIC */}
          <div className="flex justify-center items-center px-4 order-1 lg:order-2 w-full overflow-hidden">
            <div className="relative w-[300px] h-[300px] sm:w-[330px] sm:h-[330px] lg:w-[680px] lg:h-[680px] flex items-center justify-center transition-all">

              {/* OUTER RING */}
              <div
                className="absolute inset-[12px] lg:inset-[25px] rounded-full border border-blue-500/25"
                style={{ animation: "spinCW 48s linear infinite" }}
              />

              {/* INNER RING */}
              <div
                className="absolute inset-[36px] lg:inset-[75px] rounded-full border border-cyan-400/30"
                style={{ animation: "spinCCW 35s linear infinite" }}
              />

              {/* Glow */}
              <div className="absolute inset-[45px] lg:inset-[100px] rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-400/20 blur-lg lg:blur-xl" />

              {/* PANEL */}
              <div className="absolute inset-[52px] lg:inset-[108px] rounded-full border border-cyan-400/40 bg-[#09111f]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,.1)] lg:shadow-[0_0_80px_rgba(34,211,238,.15)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-14">
                  <div>
                    <h2 className="text-xs sm:text-xs lg:text-3xl font-bold text-white tracking-wide">One Platform</h2>
                    <h2 className="text-xs sm:text-xs lg:text-2xl font-semibold mt-0.5 lg:mt-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Every Workflow</h2>
                  </div>
                  <div className="w-12 lg:w-40 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-1.5 lg:my-6" />
                  <div>
                    <h2 className="text-xs sm:text-xs lg:text-3xl font-bold text-white tracking-wide">No Switching</h2>
                    <h2 className="text-xs sm:text-xs lg:text-2xl font-semibold mt-0.5 lg:mt-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">One Click</h2>
                  </div>
                  <div className="w-12 lg:w-40 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-1.5 lg:my-6" />
                  <div>
                    <h2 className="text-xs sm:text-xs lg:text-2xl font-bold text-gray-300 uppercase tracking-widest">We Handle</h2>
                    <h2 className="text-xs sm:text-xs lg:text-3xl font-black mt-0.5 lg:mt-1 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">The Rest</h2>
                  </div>
                </div>
              </div>

              {/* DOT 1 — outer ring */}
              <div style={{
                position:"absolute", width:8, height:8, borderRadius:"50%",
                background:"#22d3ee", boxShadow:"0 0 15px #22d3ee",
                top:"50%", left:"50%", marginTop:-4, marginLeft:-4,
                transformOrigin:"0 0",
                animation:"orbitOuter 48s linear infinite",
              }} className="sm:w-[10px] sm:h-[10px] sm:-mt-1 sm:-ml-1 lg:w-[15px] lg:h-[15px] lg:-mt-[7.5px] lg:-ml-[7.5px]" />

              {/* DOT 2 — outer ring */}
              <div style={{
                position:"absolute", width:8, height:8, borderRadius:"50%",
                background:"#22d3ee", boxShadow:"0 0 15px #22d3ee",
                top:"50%", left:"50%", marginTop:-4, marginLeft:-4,
                transformOrigin:"0 0",
                animation:"orbitOuter2 48s linear infinite",
              }} className="sm:w-[10px] sm:h-[10px] sm:-mt-1 sm:-ml-1 lg:w-[15px] lg:h-[15px] lg:-mt-[7.5px] lg:-ml-[7.5px]" />

              {/* DOT 3 — inner ring */}
              <div style={{
                position:"absolute", width:8, height:8, borderRadius:"50%",
                background:"#3b82f6", boxShadow:"0 0 15px #3b82f6",
                top:"50%", left:"50%", marginTop:-4, marginLeft:-4,
                transformOrigin:"0 0",
                animation:"orbitInner 35s linear infinite",
              }} className="sm:w-[10px] sm:h-[10px] sm:-mt-1 sm:-ml-1 lg:w-[15px] lg:h-[15px] lg:-mt-[7.5px] lg:-ml-[7.5px]" />

              {/* DOT 4 — inner ring */}
              <div style={{
                position:"absolute", width:8, height:8, borderRadius:"50%",
                background:"#3b82f6", boxShadow:"0 0 15px #3b82f6",
                top:"50%", left:"50%", marginTop:-4, marginLeft:-4,
                transformOrigin:"0 0",
                animation:"orbitInner2 35s linear infinite",
              }} className="sm:w-[10px] sm:h-[10px] sm:-mt-1 sm:-ml-1 lg:w-[15px] lg:h-[15px] lg:-mt-[7.5px] lg:-ml-[7.5px]" />

            </div>
          </div>

        </div>
      </section>

      {/* CONTACT POPUP MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-[20px] sm:rounded-[28px] border border-cyan-500/20 bg-[#0B1120] p-6 sm:p-8 shadow-[0_0_60px_rgba(34,211,238,.15)] my-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)}
              className="absolute right-4 top-3 sm:right-6 sm:top-5 text-3xl sm:text-4xl text-gray-400 hover:text-white transition">×</button>
            <p className="uppercase tracking-[4px] text-cyan-400 text-xs sm:text-sm mb-2 sm:mb-3">CONTACT US</p>
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">Ready To Start?</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-7 mb-6 sm:mb-10">
              Tell us about your business and we'll help you discover how AI can automate workflows, improve productivity and accelerate growth.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input type="text" name="name" placeholder="Full Name" required
                className="w-full text-sm sm:text-base rounded-xl bg-[#111827] border border-white/10 p-3 sm:p-4 outline-none focus:border-cyan-400 transition text-white" />
              <input type="email" name="email" placeholder="Business Email" required
                className="w-full text-sm sm:text-base rounded-xl bg-[#111827] border border-white/10 p-3 sm:p-4 outline-none focus:border-cyan-400 transition text-white" />
              <input type="text" name="company" placeholder="Company Name" required
                className="w-full text-sm sm:text-base rounded-xl bg-[#111827] border border-white/10 p-3 sm:p-4 outline-none focus:border-cyan-400 transition text-white" />
              <textarea rows={4} name="message" placeholder="Tell us about your project..." required
                className="w-full text-sm sm:text-base rounded-xl bg-[#111827] border border-white/10 p-3 sm:p-4 outline-none resize-none focus:border-cyan-400 transition text-white" />
              <button type="submit" disabled={loading}
                className="w-full rounded-xl py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-cyan-400 font-semibold text-base sm:text-lg hover:scale-[1.02] transition disabled:opacity-60 text-white">
                {loading ? "Sending..." : "Request Consultation"}
              </button>
              {success && (
                <p className="text-center text-green-400 text-sm font-medium">
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