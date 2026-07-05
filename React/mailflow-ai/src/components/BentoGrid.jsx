import {
  Bot,
  FileText,
  Workflow,
  Shield,
  Brain,
  BarChart3
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-blue-400 text-xs sm:text-sm font-semibold">
            OUR PLATFORM
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 leading-tight">
            AI That Powers <br className="sm:hidden" /> Every Department
          </h2>
        </div>

        {/* Responsive Bento Grid Matrix System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto lg:auto-rows-[300px]">
          
          {/* CARD 1: Large Enterprise Assistants Box */}
          <div className="md:col-span-2 lg:col-span-2 rounded-[24px] sm:rounded-[35px] bg-gradient-to-br from-blue-600 to-cyan-500 p-6 sm:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-0">
            <div>
              <Bot size={48} className="sm:w-[55px] sm:h-[55px]" />
              <h3 className="text-2xl sm:text-4xl font-bold mt-6 sm:mt-8 tracking-tight">
                Enterprise AI Assistants
              </h3>
            </div>
            <p className="mt-4 text-blue-100 text-sm sm:text-lg leading-6 sm:leading-8">
              Deploy intelligent assistants capable of answering questions,
              processing documents, automating repetitive work, and supporting
              every team.
            </p>
          </div>

          {/* CARD 2: Document AI */}
          <div className="rounded-[24px] sm:rounded-[35px] bg-[#101828] border border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-0">
            <div>
              <FileText size={36} sm:size={42} className="text-blue-400" />
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
                Document AI
              </h3>
            </div>
            <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
              Analyze reports, contracts, PDFs and knowledge instantly.
            </p>
          </div>

          {/* CARD 3: Automation */}
          <div className="rounded-[24px] sm:rounded-[35px] bg-[#101828] border border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-0">
            <div>
              <Workflow size={36} sm:size={42} className="text-blue-400" />
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
                Automation
              </h3>
            </div>
            <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
              Replace repetitive manual work with intelligent workflows.
            </p>
          </div>

          {/* CARD 4: Private AI */}
          <div className="rounded-[24px] sm:rounded-[35px] bg-[#101828] border border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-0">
            <div>
              <Shield size={36} sm:size={42} className="text-blue-400" />
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
                Private AI
              </h3>
            </div>
            <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
              Enterprise-grade security and deployment.
            </p>
          </div>

          {/* CARD 5: Knowledge AI */}
          <div className="rounded-[24px] sm:rounded-[35px] bg-[#101828] border border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-0">
            <div>
              <Brain size={36} sm:size={42} className="text-blue-400" />
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
                Knowledge AI
              </h3>
            </div>
            <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
              Connect company knowledge into one intelligent system.
            </p>
          </div>

          {/* CARD 6: Large Business Intelligence Box */}
          <div className="md:col-span-2 lg:col-span-2 rounded-[24px] sm:rounded-[35px] border border-white/10 bg-[#101828] p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[280px] lg:min-h-0">
            <div className="absolute right-0 top-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-600 blur-[80px] sm:blur-[120px] opacity-20 z-0"></div>
            
            <div className="relative z-10">
              <BarChart3 size={42} sm:size={50} className="text-blue-400" />
              <h3 className="text-2xl sm:text-4xl font-bold mt-6 sm:mt-8 tracking-tight">
                Business Intelligence
              </h3>
            </div>
            
            <p className="text-gray-400 mt-4 text-sm sm:text-lg leading-6 sm:leading-8 max-w-xl relative z-10">
              Turn enterprise data into meaningful insights using AI-powered
              reporting, analytics, forecasting, and decision support.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}