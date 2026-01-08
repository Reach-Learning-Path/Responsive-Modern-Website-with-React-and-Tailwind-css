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


    function App(){
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
};
