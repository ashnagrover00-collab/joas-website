export default function FAQ() {
  const faqs = [
    {
      q: "What does Joas AI do?",
      a: "We help businesses adopt Artificial Intelligence through consulting, deployment, automation and enterprise implementation."
    },
    {
      q: "Do you only sell software?",
      a: "No. We focus on strategy, implementation, onboarding, training and long-term support."
    },
    {
      q: "Is our data private?",
      a: "Yes. Security and privacy remain central to every enterprise deployment."
    },
    {
      q: "Can AI integrate with existing software?",
      a: "Yes. We help integrate AI into CRMs, ERPs, internal systems and business workflows."
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
              <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}