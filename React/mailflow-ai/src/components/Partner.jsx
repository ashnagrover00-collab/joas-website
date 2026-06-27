import {
  ArrowRight,
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
        className="py-32 bg-[#050816] scroll-mt-24"
      >

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-400 uppercase tracking-[3px] text-sm font-semibold">
              Official Partnership
            </div>

            <h2 className="text-6xl font-bold mt-8 leading-tight">

              Official Partner of

              <a
                href="https://lulal.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 hover:underline transition duration-300"
              >
                Lulal AI ↗
              </a>

            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-9 max-w-xl">

              Joas AI collaborates with Lulal AI to help organizations
              successfully adopt enterprise artificial intelligence.
              We focus on business consulting, deployment,
              implementation, training and long-term support so
              companies can unlock real business value through AI.

            </p>

            

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-[35px] border border-white/10 bg-[#101828] p-10">

              <div className="flex items-center justify-center gap-8">

                <h3 className="text-4xl font-bold">
                  JOAS AI
                </h3>

                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">

                  <Link2 size={38} />

                </div>

                <h3 className="text-4xl font-bold">
                  LULAL AI
                </h3>

              </div>

              <div className="grid grid-cols-2 gap-5 mt-12">

                {features.map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center gap-4"
                  >

                    <CheckCircle2
                      className="text-green-400"
                      size={22}
                    />

                    <span className="font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
        {/* HOW WE HELP */}

        <div className="mt-24">

          <h3 className="text-3xl font-bold mb-10">
            How We Help{" "}
            <span className="text-blue-400">
              Organizations
            </span>
          </h3>

          <div className="grid lg:grid-cols-5 gap-6 items-stretch">

            {services.map(({ icon: Icon, title, text }) => (

              <div
                key={title}
                className="group rounded-[30px] border border-white/10 bg-[#101828] p-8
                hover:border-blue-500/40 transition duration-300 hover:-translate-y-2
                flex flex-col h-full min-h-[430px]"
              >

                <div className="w-18 h-18 rounded-2xl bg-blue-500/10 flex items-center justify-center">

                  <Icon
                    size={36}
                    className="text-blue-400"
                  />

                </div>

                <h4 className="mt-8 text-2xl font-bold">
                  {title}
                </h4>

                <p className="mt-5 text-gray-400 leading-8 flex-1">
                {text}
                </p>

                <button className="mt-8 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:translate-x-2 transition self-start">

                  <ArrowRight size={18} />

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}