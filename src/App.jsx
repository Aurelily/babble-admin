import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Install package : npm install react-router-dom, and import here
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; */

// import component
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
