import {
    MonitorPlay,
    Layers,
    ShieldAlert,
    Sliders
} from "lucide-react";

export default function Trusted() {

    const items = [
        {
            icon: <MonitorPlay size={28} />,
            title: "Works Everywhere",
            desc: "Runs seamlessly across all major web browsers, Microsoft Outlook Desktop, Outlook Web, and the internal software tools your team uses daily."
        },
        {
            icon: <Layers size={28} />,
            title: "One Platform. Every AI Model",
            desc: "Eliminate vendor lock-in. Switch between leading foundational models or lock it down to your own private AI from one flexible gateway."
        },
        {
            icon: <ShieldAlert size={28} />,
            title: "Enterprise Deployment",
            desc: "Fully compliant cloud routing or complete on-premise installation with enterprise-grade security and absolute data sovereignty."
        },
        {
            icon: <Sliders size={28} />,
            title: "Built Around Your Business",
            desc: "Custom parametric workflows, one-click automations, and an embedded AI workspace tailored specifically to your unique operational footprint."
        }
    ];

    return (
        <section className="py-16 md:py-28 bg-[#050816] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                
                {/* Header Content */}
                <div className="text-center">
                    <p className="font-['Poppins'] uppercase tracking-[4px] md:tracking-[6px] text-white text-[20px] sm:text-[24px] font-bold">
  WHY JOAS AI
</p>

<h2 className="font-['Poppins'] mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-blue-400">
  Built Around Your Business.<br className="hidden sm:inline" /> Not The Other Way Around.
</h2>
                    <p className="text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-7 sm:leading-8">
                        We help organizations securely integrate enterprise AI into existing workflows—making work faster, smarter, and scalable without disrupting the way teams work.
                    </p>
                </div>

                {/* Cards Grid Component */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-20">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-blue-500/40 transition duration-300 md:duration-500 md:hover:-translate-y-3"
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                {item.icon}
                            </div>  
                            <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 mt-3 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}