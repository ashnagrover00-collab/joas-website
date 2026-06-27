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
        icon: <Landmark size={34} />,
        title: "Finance",
        desc: "AI-powered reporting, compliance and customer support."
    },
    {
        icon: <HeartPulse size={34} />,
        title: "Healthcare",
        desc: "Medical documentation, AI assistants and workflow automation."
    },
    {
        icon: <GraduationCap size={34} />,
        title: "Education",
        desc: "Knowledge platforms and intelligent learning assistants."
    },
    {
        icon: <ShoppingBag size={34} />,
        title: "Retail",
        desc: "Sales intelligence, support automation and analytics."
    },
    {
        icon: <Factory size={34} />,
        title: "Manufacturing",
        desc: "Predictive operations and AI-driven documentation."
    },
    {
        icon: <Building2 size={34} />,
        title: "Enterprise",
        desc: "Private AI, knowledge search and internal automation."
    }
];

export default function Industries() {

    return (

<section className="py-32">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center">

<p className="uppercase tracking-[6px] text-blue-400 text-sm">

INDUSTRIES

</p>

<h2 className="text-5xl font-bold mt-6">

Built For Every Business

</h2>

<p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">

Our AI solutions adapt to your industry—not the other way around.

</p>

</div>

<div className="grid lg:grid-cols-3 gap-7 mt-20">

{

industries.map((item,index)=>(

<div
key={index}
className="rounded-3xl border border-white/10 bg-[#101828] p-9 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

<div className="text-blue-400">

{item.icon}

</div>

<h3 className="text-2xl font-semibold mt-7">

{item.title}

</h3>

<p className="mt-5 text-gray-400 leading-8">

{item.desc}

</p>

</div>

))

}

</div>

</div>

</section>

    );

}