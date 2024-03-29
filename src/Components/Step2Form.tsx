import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { FormDataType, updateFormData } from "../store/formSlice";

import * as yup from "yup";
import { useDispatch } from "react-redux";

// type Step2FormPropsType = {
//   onSubmit: (formData: FormDataType) => void;
// };

const Step2Form: React.FC = () => {
  const dispatch = useDispatch();

  // const { onSubmit } = props;

  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);

  const [errors, setErrors] = useState<
    Partial<{ [key in keyof typeof formData]: string }>
  >({});

  const schema = yup.object().shape({
    occasion: yup.string().required("Required"),
    giftType: yup.string().required("Required"),
    "maxBudget.currency": yup.string().required("Required"),
    "maxBudget.amount": yup.number().required("Required").positive().integer(),
    country: yup.string().required("Required"),
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log(formData);
      // formData.step = 2;
      dispatch(updateFormData(formData));
      // onSubmit(formData);
      // Clear the form state after dispatching
      setFormData({
        occasion: "",
        giftType: "",
        currency: "",
        amount: 0,
        country: "",
      });
      setErrors({});
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        // Extract validation errors
        const validationErrors: { [key in keyof typeof formData]?: string } =
          {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path as keyof typeof formData] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="occasion" className="block font-medium text-gray-700">
          What's the occasion?
        </label>
        <input
          name="occasion"
          type="text"
          id="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors.occasion ? "border-red-500" : ""
          }`}
        />
        {errors.occasion && (
          <p className="text-red-500 mt-1">{errors.occasion}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="giftType" className="block font-medium text-gray-700">
          What type of a gift would you like?
        </label>
        <select
          name="giftType"
          id="giftType"
          value={formData.giftType}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors.giftType ? "border-red-500" : ""
          }`}
        >
          <option value="">Select gift type</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          {/* Add other options */}
        </select>
        {errors.giftType && (
          <p className="text-red-500 mt-1">{errors.giftType}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="currency" className="block font-medium text-gray-700">
          Currency
        </label>
        <input
          name="maxBudget.currency"
          type="text"
          id="currency"
          value={formData.currency}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors["currency"] ? "border-red-500" : ""
          }`}
        />
        {errors["currency"] && (
          <p className="text-red-500 mt-1">{errors["currency"]}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block font-medium text-gray-700">
          Maximum budget
        </label>
        <input
          name="maxBudget.amount"
          type="number"
          id="amount"
          value={formData.amount}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors["amount"] ? "border-red-500" : ""
          }`}
        />
        {errors["amount"] && (
          <p className="text-red-500 mt-1">{errors["amount"]}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block font-medium text-gray-700">
          What country should we return the results for?
        </label>
        <input
          name="country"
          type="text"
          id="country"
          value={formData.country}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors.country ? "border-red-500" : ""
          }`}
        />
        {errors.country && (
          <p className="text-red-500 mt-1">{errors.country}</p>
        )}
      </div>
      <div className="flex gap-4">
        <button type="button" className="bg-blue-500 text-white p-2 rounded-md">
          back
        </button>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step2Form;
