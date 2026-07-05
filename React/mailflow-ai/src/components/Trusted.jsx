import {
    ShieldCheck,
    Building2,
    Globe,
    Cpu
} from "lucide-react";

export default function Trusted() {

    const items = [
        {
            icon: <ShieldCheck size={28} />,
            title: "Enterprise Security",
            desc: "Privacy-first deployments with enterprise-grade protection."
        },
        {
            icon: <Building2 size={28} />,
            title: "Business Focused",
            desc: "Solutions designed around business outcomes instead of hype."
        },
        {
            icon: <Cpu size={28} />,
            title: "Modern AI Stack",
            desc: "Latest AI models integrated into real business workflows."
        },
        {
            icon: <Globe size={28} />,
            title: "Global Technology",
            desc: "World-class AI delivered with local implementation."
        }
    ];

    return (
        <section className="py-16 md:py-28 bg-[#050816] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                
                {/* Header Content */}
                <div className="text-center">
                    <p className="uppercase tracking-[4px] md:tracking-[6px] text-blue-400 text-xs sm:text-sm">
                        WHY JOAS AI
                    </p>
                    <h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
                        Built for Businesses.<br className="sm:hidden" /> Not Demos.
                    </h2>
                    <p className="text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-7 sm:leading-8">
                        We help organizations adopt AI in a practical,
                        secure and scalable way through consulting,
                        deployment and long-term partnership.
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