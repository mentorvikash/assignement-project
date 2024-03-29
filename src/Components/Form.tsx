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
    <div className="max-w-md mx-auto mt-8">
      {currentStep === 1 && <Step1Form />}
      {currentStep === 2 && <Step2Form setCurrentStep={setCurrentStep} />}
    </div>
  );
};

export default FormData;
