import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "Fast Performance",
    description:
      "Experience lightning-fast load times and smooth interactions.",
    codeSnippet: `function handleSubmit(){
   const data = await fetch("/api/submit")
   }`,
    imagePosition: "left",
  },
  {
    title: "Smart Debugging",
    description:
      "Find your mistakes and fix them quickly with our intelligent debugging tools.",
    codeSnippet: `function handleSubmit(){
       fetch("/api/submit")
       .then((data)=> console.log("Success:", data))
       .catch((error)=> console.error("Error:", error))
   }`,
    imagePosition: "right",
  },
  {
    title: "Seamless Collaboration",
    description: "Works closely with your team and shape your future together",
    codeSnippet: `function handleSubmit(){
   try{
       const data = await fetch("/api/submit")
       console.log("Success:", data)
   }catch(error){
       console.error("Error:", error)
   }
   }`,
    imagePosition: "left",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:mx-6 lg:px-8 relative"
    >
      <div>
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-grey-300 bg-clip-text text-transparent">
              Your Development Environment
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan bg-clip-text text-transparent">
              {" "}
              WorkFLow
            </span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-32 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Images Section/Code Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div
                    className=" relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50
                rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 group-hover:border-blue-600/50 transition-all duration-300"
                  >
                    {/* IDE */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4 border-rounded">
                        <div className="flex items-center space-x-2 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-grey-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {feature.title}
                        </span>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            backgroundColor: "transparent",
                            margin: 0,
                            textAlign: "left",
                            borderRadius: "8px",
                            fontSize: "12px",
                            height: "100%",
                            lineHeight: "1.5",
                          }}
                          wrapLines={true}
                        >
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*text section */}
              <div className="flex-1 w-full">
                <div className="mx-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold  mb-4 sm:mb-6 text-white">
                    {feature.title}
                  </h2>
                  <p className="text-grey-300 text-base text-xl sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
