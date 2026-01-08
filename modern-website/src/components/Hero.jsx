import { useState, useEffect } from "react";

function Hero() {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(event) {
      setmousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className="relative min-h-screen  flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      ></div>
      <div>
        <div>
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[450px] border border-white/5">
            {/*Hero Content*/}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
