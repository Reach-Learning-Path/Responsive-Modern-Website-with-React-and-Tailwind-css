import { testimonials } from "../data/testimonials";
function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-10 bg-gradient-to-l from-white to-red-800 bg-clip-text text-transparent">
          What our clients think about us
        </h2>
        <div>
          <div className="flex flex-col w-full flex-center mx-auto sm:w-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="mb-8 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:border-blue-300"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-10 h-10 mb-2"
                />
                <h3 className="flex flex-start mb-4">{testimonial.name}</h3>
                <p className="text-lg text-gray-400">
                  "{testimonial.feedBack}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
