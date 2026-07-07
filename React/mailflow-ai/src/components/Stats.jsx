import { ShieldCheck, Flashlight, Sliders, Eye } from "lucide-react";

const stats = [
  {
    icon: <ShieldCheck size={32} />,
    number: "100%",
    title: "Data Sovereignty"
  },
  {
    icon: <Flashlight size={32} />,
    number: "60s",
    title: "Onboarding Deployment"
  },
  {
    icon: <Sliders size={32} />,
    number: "∞",
    title: "Custom Workflows"
  },
  {
    icon: <Eye size={32} />,
    number: "Full",
    title: "Administrative Control"
  }
];

export default function Stats() {
  return (
    <section className="py-16 md:py-32 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Fluid grid system for phone -> tablet -> PC breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#101828] border border-white/10 p-6 sm:p-10 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-blue-400">
                {item.icon}
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mt-6 sm:mt-8">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}