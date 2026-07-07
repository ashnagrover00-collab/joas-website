const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We learn how your business works.",
  },
  {
    number: "02",
    title: "Design",
    desc: "We build the right AI strategy for your goals.",
  },
  {
    number: "03",
    title: "Deploy",
    desc: "Integrate enterprise AI into your existing ecosystem.",
  },
  {
    number: "04",
    title: "Adopt",
    desc: "We train your teams for successful adoption.",
  },
  {
    number: "05",
    title: "Grow",
    desc: "We provide continuous support and optimization.",
  },
];

export default function Timeline() {
  return (
    <section
      id="process"
      className="py-16 md:py-28 bg-[#050816] scroll-mt-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-5 py-2.5 text-xs sm:text-sm tracking-[4px] text-blue-400 font-bold">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight">
            From Strategy To Success
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="relative mt-16 md:mt-24">
          
          {/* HORIZONTAL CONNECTOR LINE - Desktop Only */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />

          {/* Grid Layout Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center group max-w-sm mx-auto lg:max-w-none">
                
                {/* Numeric Badge Circle */}
                <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-[0_0_35px_rgba(0,212,255,0.45)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 text-white">
                  {step.number}
                </div>

                {/* Heading */}
                <h3 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base leading-6 sm:leading-7">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}