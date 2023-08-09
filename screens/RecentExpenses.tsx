import React from "react";
import Expenses from "../components/Expenses";
import { useAppSelector } from "../store/hooks";

const RecentExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses);

  const last7DaysExpenses = expenses.filter((expense) => {
    const today = new Date();
    const last7Days = new Date(today.setDate(today.getDate() - 7));
    return new Date(expense.date) >= last7Days;
  });

  return <Expenses expensesPeriod="Last 7 days" expenses={last7DaysExpenses} />;
};

export default RecentExpenses;
