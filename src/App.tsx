import "./App.css";
import FormData from "./Components/Form";
import ProductList from "./Components/Product";
import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <Nav />
      <h1 className="text-3xl font-bold underline"></h1>
      <div className="flex flex-col gap-5 align-middle m-4">
        <div className="mb-5 w-full flex justify-center">
          <img className="" src="src/assets/gift.png" alt="box" width={100} />
        </div>
        <div className="mb-1 text-center w-full">
          <h2 className="font-semibold text-4xl ">
            Tell us about your gift recipient
          </h2>
        </div>
        <FormData />
        <ProductList />
      </div>
    </>
  );
}

export default App;
