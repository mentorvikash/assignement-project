// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import formReducer from './formSlice';

const rootReducer = combineReducers({
  form: formReducer,
  // Add other reducers if needed
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // Add any blacklist/whitelist configuration if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process?.env?.NODE_ENV !== 'production',
  devTools: true,
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
