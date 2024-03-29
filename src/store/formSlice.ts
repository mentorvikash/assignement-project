import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormDataType {
  whoFor?: string;
  age?: number;
  gender?: string;
  interest?: string;
  occasion?: string;
  giftType?: string;
  currency?: string ;
  amount?: number;
  country?: string;
  step?:  number
}

const initialState: FormDataType = {
  whoFor: '',
  age: 0,
  gender: '',
  interest: '',
  occasion: '',
  giftType: '',
  currency: '',
  amount: 0,
  country: '',
  step: 1,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData(state, action: PayloadAction<Partial<FormDataType>>) {
      // console.log()
      return { ...state, ...action.payload };
    },
    clearFormData() {
      return initialState;
    },
    // goToStep(state, action: PayloadAction<number>) {
    //   // For simplicity, we'll just store the step number
    //   return action.payload;
    // },
    // serialize: (state: FormDataType) => ({
    //   step: state.step,
    //   whoFor: state.whoFor, 
    //   age: state.age,
    //   gender: state.gender, 
    //   interest: state.interest, 
    //   occasion: state.occasion,
    //   giftType: state.giftType, 
    //   currency: state.currency, 
    //   amount: state.amount,
    //   country: state.country, 
    // }),
  },
});

// export const { updateFormData, clearFormData, goToStep } = formSlice.actions;
export const { updateFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
