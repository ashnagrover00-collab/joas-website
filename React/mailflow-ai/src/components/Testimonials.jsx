import {
  ShieldCheck,
  Lock,
  Cloud,
  Building2,
  ChevronRight,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Private AI",
    text: "Deploy your own AI models or use leading enterprise LLMs.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Cloud,
    title: "Cloud or On-Premise",
    text: "Choose the deployment that fits your security requirements.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: ShieldCheck,
    title: "Your Data, Your Control",
    text: "Keep sensitive business data under your control.",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Built for Enterprise",
    text: "Designed for secure, scalable AI adoption.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-12 md:py-16 px-5 overflow-hidden">

      {/* background glow */}
      <div className="absolute left-0 top-0 w-60 h-60 bg-cyan-500/5 blur-[180px]" />
<div className="absolute right-0 bottom-0 w-60 h-60 bg-fuchsia-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* Outer Border */}

        <div className="relative rounded-[30px] p-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_60px_rgba(34,211,238,0.12)]">

          <div className="rounded-[30px] bg-[#050816]">

            {/* Top Glow */}

            <div className="relative pt-8 pb-8 px-5 sm:px-7 md:px-10">

              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-40 h-[3px] bg-cyan-400 blur-sm"></div>

              <div className="flex justify-center">

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,.45)]">

                  <ShieldCheck className="w-8 h-8 text-white" />

                </div>

              </div>

              <div className="mt-7 flex items-center justify-center gap-5">

                <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent to-cyan-400"></div>

                <h2 className="text-white text-center text-2xl md:text-4xl font-bold">
                  Enterprise-Grade Security
                </h2>

                <div className="hidden sm:block h-px w-24 bg-gradient-to-l from-transparent to-fuchsia-400"></div>

              </div>

              <p className="mt-3 text-center uppercase tracking-[6px] text-cyan-400 text-xs md:text-sm">
                Your Security • Our Priority
              </p>

              {/* Feature Rows */}

              {/* Feature Rows */}

<div className="mt-8 space-y-3">
  {securityFeatures.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="group rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.02] hover:border-cyan-400/40 transition-all duration-500 hover:scale-[1.015]"
      >
        <div className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4">

          <div
            className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,.35)]`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-1 text-sm leading-5">
              {item.text}
            </p>
          </div>

          <ChevronRight className="hidden sm:block w-7 h-7 text-cyan-400 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    );
  })}
</div>
            </div>   {/* closes pt-12 pb-10 */}
          </div>     {/* closes bg-[#0B1220] */}
        </div>       {/* closes gradient border */}
      </div>         {/* closes max-w-5xl */}
    </section>
  );
}