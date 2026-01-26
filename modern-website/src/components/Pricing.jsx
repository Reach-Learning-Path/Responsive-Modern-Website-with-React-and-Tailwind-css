import { Star } from "lucide-react";
const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Basic plan for small projects and personal use.",
    features:
      "Access to essential features, Basic support, Limited customization options",
    mostPopular: false,
  },
  {
    name: "Pro",
    price: "49.99",
    description: "Advanced plan for larger projects and teams.",
    features:
      "All Starter features, Priority support, Advanced customization options",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "99.99",
    description: "Comprehensive plan for enterprise-level solutions.",
    features:
      "All Pro features, Dedicated account manager, Custom integrations",
    mostPopular: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-b from-white to-grey-300 bg-clip-text text-transparent">
            Everything you need – within arm’s reach.
          </span>
          <br />
          <span className="bg-gradient-to-b from-blue-400 to-cyan bg-clip-text text-transparent">
            {" "}
            Pricing Plans
          </span>
        </h2>
        <p className="text-gray-400/50 text-2xl sm:text-lg max-w-2xl mx-auto">
          Choose the plan that’s fit for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
        {plans.map((plan, key) => (
          <div
            key={key}
            className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.mostPopular ? "border-blue-500 shadow-xl shadow-blue-500/20 lg:scale-105" : " border-slate-800 hover:border-slate-700"}`}
          >
            {plan.mostPopular && (
              <div className="absolute -top-4 sm:-top-3 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-1 px-3 sm:px-4 py-2 sm:py-1.5 bg-blue-400 text-white text-xs sm:text-base font-medium rounded-full shadow-xl shadow-blue-500/20">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-500" />
                  <span className="">Most Popular</span>
                </div>
              </div>
            )}
            <div className="text-center w-full mt-4 sm:mt-6 flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 cursor-pointer">
              <h3 className="text-3xl font-bold text-green-600">
                {plan.name}{" "}
              </h3>
              <p className="text-center text-lg font-bold">{plan.description}</p>
              <p className="text-xl font-bold text-center mt-2 sm:mt-4">
                ${plan.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
