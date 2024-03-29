import "./App.css";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductList from "./Components/Product";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/list" Component={ProductList} />
      </Routes>
    </>
  );
}

export default App;
