import {
  ShieldCheck,
  Handshake,
  Target,
} from "lucide-react";

const pillars = [
  {
    icon: <Target size={30} />,
    title: "Business Before Technology",
    text: "Every engagement begins by understanding your business objectives, existing workflows and operational challenges before recommending any AI solution.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Responsible AI Adoption",
    text: "Security, privacy and scalability are considered from day one so every implementation aligns with enterprise expectations and long-term growth.",
  },
  {
    icon: <Handshake size={30} />,
    title: "A Long-Term Partner",
    text: "Our goal isn't simply delivering software. We work alongside your organization to help AI become a practical part of everyday business operations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-cyan-400 text-xs sm:text-sm">
            THE JOAS AI DIFFERENCE
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 leading-tight">
            Why Organizations <br className="sm:hidden" />
            <span className="text-cyan-400">Choose JOAS AI</span>
          </h2>
          <p className="mt-4 md:mt-6 text-gray-400 text-sm sm:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto">
            Successful AI adoption is about more than selecting the right
            technology. It requires a clear strategy, careful implementation
            and a partner committed to your long-term success.
          </p>
        </div>

        {/* Pillars Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#101828] p-6 sm:p-10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto lg:max-w-none w-full"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold">
                {item.title}
              </h3>

              {/* Description Body */}
              <p className="mt-4 text-gray-400 text-sm sm:text-base leading-6 sm:leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}