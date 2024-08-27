import { useCallback, useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() =>{},[])

  return (
    <>
      <Header newFn={newFn}/>
      <br />
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default App;
