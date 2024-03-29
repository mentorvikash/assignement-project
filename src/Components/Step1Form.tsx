import React, { useState } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { FormDataType, updateFormData } from "../store/formSlice";

// type Step1FormPropsType = {
//   onSubmit: (formData: FormDataType) => void;
// };

const Step1Form: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormDataType>({
    whoFor: "",
    age: 0,
    gender: "",
    interest: "",
  });

  const [errors, setErrors] = useState<
    Partial<{ [key in keyof typeof formData]: string }>
  >({});

  const schema = yup.object().shape({
    whoFor: yup.string().required("Required"),
    age: yup.number().required("Required ").positive().integer(),
    gender: yup.string().required("Required"),
    interest: yup.string().required("Required"),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // console.log({ formData });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });

      // console.log({ formData });
      const formCopy = { ...formData };
      formCopy.step = 2;

      // console.log({ formCopy });
      dispatch(updateFormData(formCopy));
      // Clear the form state after dispatching

      // onSubmit(formData);
      setFormData({
        whoFor: "",
        age: 0,
        gender: "",
        interest: "",
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
        <label htmlFor="whoFor" className="block font-medium text-gray-700">
          Who are you buying for?
        </label>
        <input
          name="whoFor"
          type="text"
          id="whoFor"
          value={formData.whoFor}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors.whoFor ? "border-red-500" : ""
          }`}
        />
        {errors.whoFor && <p className="text-red-500 mt-1">{errors.whoFor}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block font-medium text-gray-700">
          How old are they?
        </label>
        <input
          name="age"
          type="number"
          id="age"
          value={formData.age}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors.age ? "border-red-500" : ""
          }`}
        />
        {errors.age && <p className="text-red-500 mt-1">{errors.age}</p>}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">
          They identify as:
        </label>
        <div>
          <label htmlFor="male" className="inline-flex items-center">
            <input
              name="gender"
              type="radio"
              id="male"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Male
          </label>
          <label htmlFor="female" className="inline-flex items-center ml-4">
            <input
              name="gender"
              type="radio"
              id="female"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Female
          </label>
          <label htmlFor="other" className="inline-flex items-center ml-4">
            <input
              name="gender"
              type="radio"
              id="other"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Other
          </label>
        </div>
        {errors.gender && <p className="text-red-500 mt-1">{errors.gender}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="interest" className="block font-medium text-gray-700">
          What do they like to do? Be specific!
        </label>
        <input
          name="interest"
          type="text"
          id="interest"
          value={formData.interest}
          onChange={handleInputChange}
          className={`mt-1 p-2 w-full border-gray-300 rounded-md ${
            errors.interest ? "border-red-500" : ""
          }`}
        />
        {errors.interest && (
          <p className="text-red-500 mt-1">{errors.interest}</p>
        )}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Continue
      </button>
    </form>
  );
};

export default Step1Form;
