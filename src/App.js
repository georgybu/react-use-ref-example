import {useEffect, useRef} from "react";

function App() {
  const divRef = useRef();

  useEffect(() => {
    const e = document.querySelector('h1');
    if (e) {
      // you can move it to DIV
      // divRef.current.appendChild(e)

      // or you can copy it to DIV
      const copyOfElement = e.cloneNode(true);
      divRef.current.appendChild(copyOfElement);
    }
  }, []);

  return (
    <div className="App">
      <div ref={divRef}/>
    </div>
  );
}

export default App;
