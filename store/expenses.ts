import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from ".";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

const initialState: Expense[] = [];

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<Omit<Expense, "id">>) {
      const id = Math.random().toString(36).substring(7);
      state.push({ ...action.payload, id });
    },
    removeExpense(state, action: PayloadAction<string>) {
      const index = state.findIndex((expense) => expense.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    updateExpense(state, action: PayloadAction<Expense>) {
      const index = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addExpense, removeExpense, updateExpense } =
  expensesSlice.actions;

export const totalAmount = () =>
  useSelector((state: RootState) => {
    return state.expenses.reduce((prev, curr) => prev + curr.amount, 0);
  });

export default expensesSlice.reducer;
