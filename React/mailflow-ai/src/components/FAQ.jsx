const faqs=[

{
q:"What does Joas AI do?",
a:"We help businesses adopt Artificial Intelligence through consulting, deployment, automation and enterprise implementation."
},

{
q:"Do you only sell software?",
a:"No. We focus on strategy, implementation, onboarding, training and long-term support."
},

{
q:"Is our data private?",
a:"Yes. Security and privacy remain central to every enterprise deployment."
},

{
q:"Can AI integrate with existing software?",
a:"Yes. We help integrate AI into CRMs, ERPs, internal systems and business workflows."
}

];

export default function FAQ(){

return(

<section className="py-32">

<div className="max-w-5xl mx-auto px-8">

<div className="text-center">

<p className="uppercase tracking-[6px] text-blue-400">

FAQ

</p>

<h2 className="text-5xl font-bold mt-5">

Frequently Asked Questions

</h2>

</div>

<div className="space-y-6 mt-20">

{

faqs.map((faq,index)=>(

<div
key={index}
className="rounded-3xl border border-white/10 bg-[#101828] p-8">

<h3 className="text-xl font-semibold">

{faq.q}

</h3>

<p className="text-gray-400 mt-4 leading-8">

{faq.a}

</p>

</div>

))

}

</div>

</div>

</section>

);

}