import {
  CheckCircle2,
  Link2,
  GraduationCap,
  Briefcase,
  Cog,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Training & Adoption",
    text: "Empower teams with hands-on AI training and change management for successful adoption.",
  },
  {
    icon: Briefcase,
    title: "AI Consulting",
    text: "Strategic guidance to identify opportunities and build AI roadmaps aligned with your business goals.",
  },
  {
    icon: Cog,
    title: "Business Automation",
    text: "Automate repetitive workflows and business processes using intelligent AI solutions.",
  },
  {
    icon: Link2,
    title: "Enterprise AI Deployment",
    text: "Secure, scalable deployment tailored to your enterprise environment.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    text: "Continuous monitoring, optimization and long-term AI support.",
  },
];

const features = [
  "Authorized Sales",
  "Enterprise Deployment",
  "Consultation",
  "Training & Support",
];

export default function Partner() {
  return (
    <section
      id="partnership"
      className="py-16 md:py-32 bg-[#050816] scroll-mt-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Top Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-white uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm font-semibold">
            Global Partnership
          </div>

            {/* POWERED BY HEADING BLOCK */}
            <h2 className="font-['Poppins'] mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-blue-400">
              Powered by{" "}
              <a
                href="https://lulal.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 hover:underline transition duration-300"
              >
                Lulal AI ↗
              </a>
            </h2>

            {/* DESCRIPTION PARAGRAPH */}
            <p className="font-['Poppins'] mt-6 text-gray-400 text-sm sm:text-lg leading-7 sm:leading-9 max-w-xl mx-auto lg:mx-0 font-bold">
  Joas AI collaborates with Lulal AI to help organizations
  successfully adopt enterprise artificial intelligence.
  We focus on business consulting, deployment,
  implementation, training and long-term support so
  companies can unlock real business value through AI.
</p>
          </div>

          {/* RIGHT CONNECTIVITY GRAPHIC CARD */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="rounded-[24px] sm:rounded-[35px] border border-white/10 bg-[#101828] p-6 sm:p-10">
              
              <div className="flex items-center justify-center gap-4 sm:gap-8">
                <h3 className="text-xl sm:text-4xl font-bold tracking-tight">
                  JOAS AI
                </h3>
                <div className="w-14 h-14 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Link2 className="w-6 h-6 sm:w-[38px] sm:h-[38px]" />
                </div>
                <h3 className="text-xl sm:text-4xl font-bold tracking-tight">
                  LULAL AI
                </h3>
              </div>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-12">
                {features.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 flex items-center gap-3 sm:gap-4"
                  >
                    <CheckCircle2
                      className="text-green-400 flex-shrink-0"
                      size={20}
                    />
                    <span className="font-medium text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* HOW WE HELP SECTION */}
        <div className="mt-20 md:mt-28">
          <h3 className="text-[26px] sm:text-[34px] font-bold mb-8 text-center lg:text-left">
    How We Help{" "}
    <span className="text-blue-400">
      Organizations
    </span>
  </h3>

          {/* Responsive columns grid for services matrix mapping layout correctly across views */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-[24px] sm:rounded-[30px] border border-white/10 bg-[#101828] p-6 sm:p-8 hover:border-blue-500/40 transition duration-300 md:hover:-translate-y-2 flex flex-col h-full lg:min-h-[410px]"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon
                    size={30}
                    className="text-blue-400"
                  />
                </div>

                <h4 className="mt-6 text-xl sm:text-2xl font-bold leading-snug">
                  {title}
                </h4>

                <p className="mt-4 text-gray-400 text-sm sm:text-base leading-6 sm:leading-7 flex-1">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}