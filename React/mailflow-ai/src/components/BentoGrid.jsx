import {
  Clock3,
  TrendingUp,
  Target,
  Expand,
  UserRound,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Save Valuable Time",
    description:
      "Automate repetitive work so teams can focus on what matters.",
  },
  {
    icon: TrendingUp,
    title: "Higher Productivity",
    description:
      "Help every employee achieve more without increasing workload.",
  },
  {
    icon: Target,
    title: "Better Decisions",
    description:
      "Turn information into faster and smarter decisions.",
  },
  {
    icon: Expand,
    title: "Scale Without Complexity",
    description:
      "Expand AI across teams without disrupting operations.",
  },
  {
    icon: UserRound,
    title: "User Friendly Interface",
    description:
      "Simple, familiar and easy to use from day one.",
  },
];

export default function BentoGrid() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20">

      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 text-center uppercase tracking-[0.35em] text-white text-lg sm:text-xl md:text-2xl font-semibold">
            HOW JOAS DRIVES RESULTS
          </p>
          <h2
  className="mx-auto max-w-4xl text-center font-semibold leading-[1.15] text-[#5EA2FF] text-[22px] sm:text-2xl md:text-3xl lg:text-[44px]"
  style={{ fontFamily: "'Cormorant Garamond', serif" }}
>
  The best AI isn't another tool to manage—
  <br className="hidden md:block" />
  it's the one that keeps everything in one place.
</h2>

          <p className="mx-auto mt-8 max-w-4xl text-center text-gray-400 leading-8 text-base sm:text-lg md:text-xl">
            JOAS AI brings your tools, workflows and enterprise AI together in one
            place, helping your team get more done with less effort.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5" />

                {/* Icon */}
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1b2440] to-[#111827] border border-white/10 group-hover:border-cyan-400/40 transition-all duration-500">
                  <Icon className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Title (Changed color to white) */}
                <h3 className="relative z-10 mt-8 text-center text-2xl font-bold text-white leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-5 text-center text-gray-400 leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}