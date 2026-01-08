import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeExample } from "../data/codeExample";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      ></div>
      <div className="relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[450px] border border-white/5">
            {/* Hero Content */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
              <div className="flex items-center sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                <span className="text-xs sm:text-sm text-gray-300">
                  CodeFlowing
                </span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="p-3 sm:p-4 relative h-full">
              {/* Additional hero content can go here */}
              <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("App.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                    activeTab === "App.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  App.jsx
                </button>
                <button
                  onClick={() => setActiveTab("Hero.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                    activeTab === "Hero.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  Hero.jsx
                </button>
                <button
                  onClick={() => setActiveTab("Navbar.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
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
        </div>
      </div>
    </section>
  );
}
