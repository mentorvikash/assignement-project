import "./App.css";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
}

export default App;
