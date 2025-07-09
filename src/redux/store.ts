import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../redux/features/auth/auth.slice"; // update path as needed

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

