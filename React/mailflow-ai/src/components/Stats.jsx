import { TrendingUp, Users, Bot, Clock } from "lucide-react";

const stats = [
    {
        icon: <TrendingUp size={32} />,
        number: "70%",
        title: "Less Manual Work"
    },
    {
    icon: <Bot size={32} />,
    number: "100%",
    title: "Private & Secure Deployments"
  },
    {
        icon: <Users size={32} />,
        number: "100+",
        title: "Business Workflows    "
    },
    {
     icon: <Clock size={32} />,
    number: "24/7",
    title: "Continuous Business Intelligence"
  }
];

export default function Stats() {

    return (

<section className="py-32">

<div className="max-w-7xl mx-auto px-8">

<div className="grid lg:grid-cols-4 gap-7">

{

stats.map((item,index)=>(

<div
key={index}
className="rounded-3xl bg-[#101828] border border-white/10 p-10 hover:border-blue-500 transition">

<div className="text-blue-400">

{item.icon}

</div>

<h2 className="text-5xl font-bold mt-8">

{item.number}

</h2>

<p className="text-gray-400 mt-4">

{item.title}

</p>

</div>

))

}

</div>

</div>

</section>

    );

}