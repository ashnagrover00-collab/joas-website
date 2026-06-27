import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Enterprise Client",
    role: "Operations Director",
    text: "Joas AI helped us identify practical AI opportunities instead of selling unnecessary tools. The implementation was smooth and focused on measurable business outcomes.",
  },
  {
    name: "Technology Lead",
    role: "IT Manager",
    text: "The consulting process gave us a clear roadmap for AI adoption. Everything was structured, secure, and seamlessly integrated into our existing workflows.",
  },
  {
    name: "Business Owner",
    role: "Founder",
    text: "Instead of generic AI demonstrations, we received solutions tailored specifically to our business, helping us automate repetitive work and improve efficiency.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl font-bold mt-5">
            What Our
            <span className="text-blue-400"> Clients Say</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            Trusted by organizations adopting AI through consulting,
            automation, deployment and long-term support.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="rounded-[30px] border border-white/10 bg-[#101828] p-10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)]"
            >

              {/* Stars */}

              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="text-gray-300 leading-8 italic">
                "{item.text}"
              </p>

              {/* Divider */}

              <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 mt-8 mb-8 rounded-full"></div>

              {/* Client */}

              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-blue-400 mt-1">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}