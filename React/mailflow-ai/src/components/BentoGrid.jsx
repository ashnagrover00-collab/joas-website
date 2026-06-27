// ===============================
// src/components/BentoGrid.jsx
// ===============================

import {

Bot,

FileText,

Workflow,

Shield,

Brain,

BarChart3

}

from "lucide-react";

export default function BentoGrid(){

return(

<section id="solutions" className="py-24">

<div className="max-w-7xl mx-auto px-8">

<div className="mb-20">

<p className="uppercase tracking-[6px] text-blue-400 text-sm">

OUR PLATFORM

</p>

<h2 className="text-5xl font-bold mt-5">

AI That Powers

Every Department

</h2>

</div>

<div className="grid lg:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="lg:col-span-2 rounded-[35px] bg-gradient-to-br from-blue-600 to-cyan-500 p-10 flex flex-col">

    <Bot size={55}/>

    <h3 className="text-4xl font-bold mt-8">
        Enterprise AI Assistants
    </h3>

    <p className="mt-5 text-blue-100 leading-8 text-lg">
        Deploy intelligent assistants capable of answering questions,
        processing documents, automating repetitive work, and supporting
        every team.
    </p>

</div>

<div className="rounded-[35px] bg-[#101828] border border-white/10 p-8">

<FileText size={42}/>

<h3 className="mt-8 text-2xl font-semibold">

Document AI

</h3>

<p className="text-gray-400 mt-5">

Analyze reports,

contracts,

PDFs

and knowledge instantly.

</p>

</div>

<div className="rounded-[35px] bg-[#101828] border border-white/10 p-8">

<Workflow size={42}/>

<h3 className="mt-8 text-2xl font-semibold">

Automation

</h3>

<p className="text-gray-400 mt-5">

Replace repetitive manual work
with intelligent workflows.

</p>

</div>

<div className="rounded-[35px] bg-[#101828] border border-white/10 p-8">

<Shield size={42}/>

<h3 className="mt-8 text-2xl font-semibold">

Private AI

</h3>

<p className="text-gray-400 mt-5">

Enterprise-grade
security
and deployment.

</p>

</div>

<div className="rounded-[35px] bg-[#101828] border border-white/10 p-8">

<Brain size={42}/>

<h3 className="mt-8 text-2xl font-semibold">

Knowledge AI

</h3>

<p className="text-gray-400 mt-5">

Connect company knowledge into one intelligent system.

</p>

</div>

<div className="lg:col-span-2 rounded-[35px] border border-white/10 bg-[#101828] p-10 relative overflow-hidden flex flex-col">

    <div className="absolute right-0 top-0 w-72 h-72 bg-blue-600 blur-[120px] opacity-20"></div>

    <BarChart3 size={50}/>

    <h3 className="text-4xl font-bold mt-8">
        Business Intelligence
    </h3>

    <p className="text-gray-400 mt-5 text-lg leading-8 max-w-xl">
        Turn enterprise data into meaningful insights using AI-powered
        reporting, analytics, forecasting, and decision support.
    </p>

</div>

</div>

</div>

</section>

);

}