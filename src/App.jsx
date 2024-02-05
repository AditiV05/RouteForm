import { useState } from "react";
import "./App.css";
import { Nav as Navbar } from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
