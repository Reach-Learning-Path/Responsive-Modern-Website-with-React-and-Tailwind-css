import { useState, useEffect } from "react";
import { ChevronDown, GitBranch, Sparkle } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cardsFloating, codeExample } from "../data/codeExample";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { Github } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { GitHub } from "lucide-react";

export default function Test() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const currentCard = cardsFloating[activeTab];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      ></div>

      <div className="mx-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 hover:scale-107 cursor-pointer hover:bg-blue-500/40 transition-all">
              <Sparkle className="w-4 h-4 text-blue-400" />
              <span className="text-xs">Introducing CodeFlowing</span>
            </div>
            <div>
              <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5-xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100/20 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  The Future is Here{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400/20 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Code.Build.Launch.
                </span>
                <span className="bg-gradient-to-r from-white via-blue-100/20 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Rapid by Nature
                </span>
              </h1>
            </div>
            <p className="text-md sm:text-base lg:text-lg text-grey-400 max-w-2xl mx-auto lg:mx-0 mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              This is a place for curious souls who believe they can build
              something meaningful with technology.Whether you’re just starting
              out or already deep into coding and AI, you’re welcome here.
              Mistakes are part of the journey, questions are encouraged, and
              growth is the goal. Let’s learn together, support each other, and
              turn ideas into something real — one line of code at a time.
            </p>
          </div>
          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[450px] border border-white/5">
                {/* Hero Content */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    CodeFlowing
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="p-3 sm:p-4 relative h-full ">
                  {/* Additional hero content can go here */}
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border cursor-pointer ${
                        activeTab === "App.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border cursor-pointer ${
                        activeTab === "Hero.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border cursor-pointer ${
                        activeTab === "Navbar.jsx"
                          ? "bg-blue-500/30 text-white border-blue-400/20"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.jsx
                    </button>
                  </div>
                  {/* Code example display area */}
                  <div className="relative overflow-hidden flex-grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        textAlign: "left",
                        borderRadius: "8px",
                        fontSize: "11px",
                        height: "100%",
                        lineHeight: "1.4",
                        border: "1px solid #3c3c3c",
                      }}
                    >
                      {codeExample[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 transform translate-y-8 translate-x-8 w-72 ${currentCard.bgColor} backdrop-blur-xl rounded-lg p-4 border  border-white/20 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`w-6 h-6 ${currentCard.iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {currentCard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentCard.textColor}`}
                  >
                    {currentCard.title}
                  </span>
                </div>
                <div
                  className={`text-sm text-left ${currentCard.contentColor}`}
                >
                  {currentCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
