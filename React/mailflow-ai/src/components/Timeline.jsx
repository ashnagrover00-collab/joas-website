const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Understand your business goals, workflows and challenges.",
  },
  {
    number: "02",
    title: "AI Strategy",
    desc: "Create a customized implementation roadmap.",
  },
  {
    number: "03",
    title: "Deployment",
    desc: "Integrate enterprise AI into your existing ecosystem.",
  },
  {
    number: "04",
    title: "Training",
    desc: "Empower your teams to confidently adopt AI.",
  },
  {
    number: "05",
    title: "Continuous Support",
    desc: "Optimization, monitoring and long-term partnership.",
  },
];

export default function Timeline() {
  return (
    <section
        id="process"
        className="py-28 bg-[#050816] scroll-mt-24"
      >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-6 py-3 text-sm tracking-[4px] text-blue-400">
            OUR PROCESS
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-8">
            From Strategy To Success
          </h2>

        </div>

        <div className="relative mt-24">

          <div className="absolute top-10 left-0 w-full h-[2px] bg-white/10"></div>

          <div className="grid lg:grid-cols-5 gap-8 relative">

            {steps.map((step) => (

              <div key={step.number} className="text-center">

                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-2xl font-bold shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                  {step.number}
                </div>

                <h3 className="mt-8 text-3xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
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