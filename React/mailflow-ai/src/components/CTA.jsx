import { ArrowRight } from "lucide-react";

export default function CTA(){

return(

<section className="py-32">

<div className="max-w-6xl mx-auto px-8">

<div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-16 text-center">

<h2 className="text-6xl font-bold">

Ready To Deploy AI?

</h2>

<p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-9">

Whether you're just starting with AI or scaling enterprise-wide,
Joas AI helps you implement solutions that deliver measurable results.

</p>

<button className="mt-12 inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">

Book Free Consultation

<ArrowRight size={20}/>

</button>

</div>

</div>

</section>

);

}