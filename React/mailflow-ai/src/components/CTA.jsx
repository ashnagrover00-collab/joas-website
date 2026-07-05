import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-32 bg-[#050816] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Banner Card Wrapper */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-8 sm:p-16 text-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Ready To Deploy AI?
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-xl text-blue-100 max-w-3xl mx-auto leading-6 sm:leading-9">
            Whether you're just starting with AI or scaling enterprise-wide,
            Joas AI helps you implement solutions that deliver measurable results.
          </p>

          <button className="mt-8 sm:mt-12 inline-flex items-center justify-center gap-3 bg-white text-black text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform duration-200 w-full sm:w-auto">
            <span>Book Free Consultation</span>
            <ArrowRight size={18} className="flex-shrink-0" />
          </button>

        </div>

      </div>
    </section>
  );
}