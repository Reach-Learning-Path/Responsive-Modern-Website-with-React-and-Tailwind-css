export const codeExample = {
  "App.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from 'react;


    function App(){
    const [ code , setCode ] = useState ('');

    const handleCompletion = async () =>{
    const suggestion = await CodeFFlow.complete(code);
     setCode(suggestion);
    };
    return (
    <div className="app">
    <CodeFlow
    code={code}
    onCodeChange={setCode}
    onCompletion={handleCompletion}
    />
    </div>
    )
    `,
  "Hero.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from 'react;
    import {useEffect} from 'react;


    function Hero(){
    const [ code , setCode ] = useState ('');
    useEffect(()=>{
      const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    const handleCompletion = async () =>{
        const suggestion = await CodeFFlow.complete(code);
        setCode(suggestion);
    };
    return (
    <div className="app">
    <CodeFlow
    code={code}
    onCodeChange={setCode}
    onCompletion={handleCompletion}
    />
    </div>
    )
    `,
  "Navbar.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from 'react;

    function Navbar(){
    const [ code , setCode ] = useState ('');

    const handleCompletion = async () =>{
        const suggestion = await CodeFFlow.complete(code);
        setCode(suggestion);
    };
    return (
    <div className="app">
    <CodeFlow
    code={code}
    onCodeChange={setCode}
    onCompletion={handleCompletion}
    />
    </div>
    )
    `,
};

export const cardsFloating = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion,",
    content: "AI-powered code suggestions",
  },
  "Hero.jsx": {
    bgColor: "bg-green-700/30",
    iconColor: "text-cyan-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "⚡️",
    title: "Fast & Intelligent,",
    content: "Boost your productivity with AI-driven code completions",
  },
  "Navbar.jsx": {
    bgColor: "bg-red-600/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "🔎",
    title: "Smart Completion,",
    content: "AI-powered code suggestions",
  },
};
