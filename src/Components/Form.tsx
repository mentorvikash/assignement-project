import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import { RootState } from "../store/store";
// import { updateFormData } from "../store/formSlice";
// import { FormDataType } from "../store/formSlice";

const FormData: React.FC = () => {
  // const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state);
  const { step } = useSelector((state: RootState) => state.form);
  const [currentStep, setCurrentStep] = useState(1);

  console.log({ store });
  useEffect(() => {
    if (step) {
      setCurrentStep(step);
    }
  }, [step]);
  // const state = useSelector((state: RootState) => state);
  // console.log(state);
  // const handleStep1Submit = (formData: FormDataType) => {
  //   // dispatch(updateFormData(formData));
  //   console.log(formData);
  // };

  // const handleStep2Submit = (formData: FormDataType) => {
  //   console.log("Form submitted:", formData);
  //   // Here you would typically submit the form data
  // };

  return (
    <div className="max-w-md mx-auto mt-8">
      {currentStep === 1 && <Step1Form />}
      {currentStep === 2 && <Step2Form />}
    </div>
  );
};

export default FormData;

// import React from "react";
// import { useState } from "react";
// import Step1Form from "./Step1Form";
// import Step2Form from "./Step2Form";

// const FormData: React.FC = () => {
//   const [step, setStep] = useState(1);

//   const handleStep1Submit = (data: any) => {
//     setStep(2);
//   };

//   const handleStep2Submit = (data: any) => {
//     console.log("Form submitted:", data);
//     // Here you would typically submit the form data
//   };

//   const handleBack = () => {
//     setStep(1);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       {step === 1 && <Step1Form onSubmit={handleStep1Submit} />}
//       {step === 2 && (
//         <Step2Form onSubmit={handleStep2Submit} onBack={handleBack} />
//       )}
//     </div>
//   );
// };

// export default FormData;
