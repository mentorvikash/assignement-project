import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import { RootState } from "../store/store";

const FormData: React.FC = () => {
  const store = useSelector((state: RootState) => state);
  const { step } = useSelector((state: RootState) => state.form);
  const [currentStep, setCurrentStep] = useState(1);

  console.log({ store });
  useEffect(() => {
    if (step) {
      setCurrentStep(step);
    }
  }, [step]);

  return (
    <div className="flex flex-col gap-5 align-middle m-16">
      <div className="mb-5 w-full flex justify-center">
        <img className="" src="src/assets/gift.png" alt="box" width={100} />
      </div>
      <div className="mb-1 text-center w-full">
        <h2 className="font-semibold text-4xl ">
          {step === 1
            ? "Tell us about your gift recipient"
            : "Help us find the right gift!"}
        </h2>
      </div>

      <div className="">
        {currentStep === 1 && <Step1Form />}
        {currentStep === 2 && <Step2Form setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
};

export default FormData;
