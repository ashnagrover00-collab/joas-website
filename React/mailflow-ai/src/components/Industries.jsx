import {
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Factory,
  Building2
} from "lucide-react";

const industries = [
  {
    icon: <Landmark size={30} />,
    title: "Finance",
    desc: "AI-powered reporting, compliance and customer support."
  },
  {
    icon: <HeartPulse size={30} />,
    title: "Healthcare",
    desc: "Medical documentation, AI assistants and workflow automation."
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Education",
    desc: "Knowledge platforms and intelligent learning assistants."
  },
  {
    icon: <ShoppingBag size={30} />,
    title: "Retail",
    desc: "Sales intelligence, support automation and analytics."
  },
  {
    icon: <Factory size={30} />,
    title: "Manufacturing",
    desc: "Predictive operations and AI-driven documentation."
  },
  {
    icon: <Building2 size={30} />,
    title: "Enterprise",
    desc: "Private AI, knowledge search and internal automation."
  }
];

export default function Industries() {
  return (
    <section className="py-16 md:py-32 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-blue-400 text-xs sm:text-sm">
            INDUSTRIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 md:mt-6 leading-tight">
            Built For Every Business
          </h2>
          <p className="mt-4 md:mt-6 text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-6 sm:leading-8">
            Our AI solutions adapt to your industry—not the other way around.
          </p>
        </div>

        {/* Responsive Matrix Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mt-12 md:mt-20">
          {industries.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#101828] p-6 sm:p-9 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto lg:max-w-none w-full"
            >
              <div className="text-blue-400">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-7">
                {item.title}
              </h3>
              <p className="mt-3 sm:mt-5 text-gray-400 text-sm sm:text-base leading-6 sm:leading-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}