import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { clearFormData } from "./store/formSlice";

const schema = yup.object({
  whoFor: yup.string().required("Who are you buying for? is required"),
  age: yup
    .number()
    .positive()
    .integer()
    .required("How old are they? is required"),
  gender: yup.string().required("They identify as is required"),
  interest: yup
    .string()
    .required("What do they like to do? Be specific! is required"),
});

export default function App() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // Validate on blur to show errors immediately
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (step === 1) {
      setStep(2);
      dispatch(clearFormData());
    } else {
      console.log(data);
      // Here you would typically submit the form data
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      {step === 1 && (
        <div>
          <div className="mb-4">
            <label htmlFor="whoFor" className="block font-medium text-gray-700">
              Who are you buying for?
            </label>
            <input
              {...register("whoFor")}
              type="text"
              id="whoFor"
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            />
            <p className="text-red-500">{errors.whoFor?.message}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block font-medium text-gray-700">
              How old are they?
            </label>
            <input
              {...register("age")}
              type="number"
              id="age"
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            />
            <p className="text-red-500">{errors.age?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              They identify as:
            </label>
            <div>
              <label htmlFor="male" className="inline-flex items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  id="male"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label htmlFor="female" className="inline-flex items-center ml-4">
                <input
                  {...register("gender")}
                  type="radio"
                  id="female"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
              <label htmlFor="other" className="inline-flex items-center ml-4">
                <input
                  {...register("gender")}
                  type="radio"
                  id="other"
                  value="other"
                  className="mr-2"
                />
                Other
              </label>
            </div>
            <p className="text-red-500">{errors.gender?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="interest"
              className="block font-medium text-gray-700"
            >
              What do they like to do? Be specific!
            </label>
            <input
              {...register("interest")}
              type="text"
              id="interest"
              className="mt-1 p-2 w-full border-gray-300 rounded-md"
            />
            <p className="text-red-500">{errors.interest?.message}</p>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className="bg-blue-500 text-white p-2 rounded-md mr-2"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          {/* Second step fields can be added here */}
          <button
            type="button"
            onClick={() => setStep(1)}
            className="bg-gray-500 text-white p-2 rounded-md mr-2"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      )}
    </form>
  );
}
