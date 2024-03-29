import "./App.css";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductList from "./Components/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index Component={Home} />
          <Route path="/list" Component={ProductList} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
