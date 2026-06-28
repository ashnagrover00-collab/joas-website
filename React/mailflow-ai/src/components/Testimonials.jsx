import {
  ShieldCheck,
  Handshake,
  Target,
} from "lucide-react";

const pillars = [
  {
    icon: <Target size={34} />,
    title: "Business Before Technology",
    text: "Every engagement begins by understanding your business objectives, existing workflows and operational challenges before recommending any AI solution.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Responsible AI Adoption",
    text: "Security, privacy and scalability are considered from day one so every implementation aligns with enterprise expectations and long-term growth.",
  },
  {
    icon: <Handshake size={34} />,
    title: "A Long-Term Partner",
    text: "Our goal isn't simply delivering software. We work alongside your organization to help AI become a practical part of everyday business operations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            THE JOAS AI DIFFERENCE
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Why Organizations
            <span className="text-cyan-400"> Choose JOAS AI</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Successful AI adoption is about more than selecting the right
            technology. It requires a clear strategy, careful implementation
            and a partner committed to your long-term success.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {pillars.map((item, index) => (

            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-[#101828] p-10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
