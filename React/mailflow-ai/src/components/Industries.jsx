import {
  DollarSign,
  Megaphone,
  Users2,
  Briefcase,
  Scale,
  Settings
} from "lucide-react";

const teams = [
  {
    icon: <DollarSign size={30} />,
    title: "Sales & Account Management",
    desc: "Draft hyper-personalized outreach, summarize call transcripts instantly, and generate executive summaries for deals without dropping your CRM window."
  },
  {
    icon: <Megaphone size={30} />,
    title: "Marketing & Copywriting",
    desc: "Produce localized copy, edit long-form brand content, and test structural content variations right inside your browser or native CMS workspace."
  },
  {
    icon: <Users2 size={30} />,
    title: "Human Resources",
    desc: "Parse volume resumes, construct customized interview frameworks, and standardize onboarding templates with direct context grounding."
  },
  {
    icon: <Briefcase size={30} />,
    title: "Finance & Strategy",
    desc: "Analyze dense financial statements, detect structural variances across reporting periods, and summarize multi-page economic data sets seamlessly."
  },
  {
    icon: <Scale size={30} />,
    title: "Legal & Compliance",
    desc: "Identify key risks in inbound agreements, review repetitive contract terms, and draft clean internal compliance frameworks safely."
  },
  {
    icon: <Settings size={30} />,
    title: "Operations & Procurement",
    desc: "Automate complex request routing, generate vendor negotiation scripts, and query deep internal process documents in a single click."
  }
];

export default function Industries() {
  return (
    <section className="py-16 md:py-32 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-blue-400 text-xs sm:text-sm">
            WORKFLOW MATRIX
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 md:mt-6 leading-tight">
            Built For Every Team
          </h2>
          <p className="mt-4 md:mt-6 text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-6 sm:leading-8">
            Our embedded workspace overlay puts enterprise AI directly into the software, interfaces, and platforms your business divisions use every day.
          </p>
        </div>

        {/* Responsive Matrix Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mt-12 md:mt-20">
          {teams.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#101828] p-6 sm:p-9 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto lg:max-w-none w-full"
            >
              <div className="text-blue-400">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-7">
                {item.title}
              </h3>
              <p className="mt-3 sm:mt-5 text-gray-400 text-sm sm:text-base leading-6 sm:leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}