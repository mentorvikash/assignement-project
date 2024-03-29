import React from "react";
import ProductList from "./Product";
import FormData from "./Form";

const Home: React.FC = () => {
  return (
    <>
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
};

export default Home;
