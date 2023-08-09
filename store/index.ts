import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenses";
import overlaysReducer from "./overlays";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    overlays: overlaysReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
