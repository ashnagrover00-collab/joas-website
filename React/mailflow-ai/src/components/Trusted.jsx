// ===============================
// src/components/Trusted.jsx
// ===============================

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

<section className="py-28">

<div className="max-w-7xl mx-auto px-8">

<div className="text-center">

<p className="uppercase tracking-[6px] text-blue-400 text-sm">

WHY JOAS AI

</p>

<h2 className="mt-5 text-5xl font-bold">

Built for Businesses.

Not Demos.

</h2>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">

We help organizations adopt AI in a practical,
secure and scalable way through consulting,
deployment and long-term partnership.

</p>

</div>

<div className="grid lg:grid-cols-4 gap-7 mt-20">

{

items.map((item,index)=>(

<div
key={index}
className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/40 transition duration-500 hover:-translate-y-3">

<div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">

{item.icon}

</div>

<h3 className="text-2xl font-semibold mt-8">

{item.title}

</h3>

<p className="text-gray-400 mt-5 leading-8">

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