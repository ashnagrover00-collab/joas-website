export default function FAQ() {
  const faqs = [
    {
      q: "What does JOAS AI do?",
      a: "JOAS AI embeds powerful enterprise AI workflows directly into the software, browsers, and platforms your teams use every day. We eliminate the need to switch tabs or manage multiple disconnected AI tools."
    },
    {
      q: "Which AI models can we use?",
      a: "Our flexible multi-model gateway allows you to toggle seamlessly between leading foundational LLMs, or lock down access entirely to your company's own private, fine-tuned model to eliminate vendor lock-in."
    },
    {
      q: "How is our data protected?",
      a: "We ensure 100% data sovereignty. JOAS AI can be deployed via fully compliant secure cloud routing or as a complete on-premise installation, guaranteeing that your data remains entirely within your administrative control."
    },
    {
      q: "How long does deployment take?",
      a: "Basic user onboarding and baseline deployment can take as little as 60 seconds. Custom parametric workflows and specific internal systems integrations are scoped and rolled out tailored directly to your operational footprint."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#050816] text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-blue-400 text-xs sm:text-sm font-semibold">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Stack Container */}
        <div className="space-y-4 sm:space-y-6 mt-12 md:mt-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#101828] p-6 sm:p-8 max-w-3xl mx-auto w-full"
            >
              <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                {faq.q}
              </h3>
              <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}