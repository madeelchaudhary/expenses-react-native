import React from "react";
import Expenses from "../components/Expenses";
import { useAppSelector } from "../store/hooks";

const AllExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses);

  return <Expenses expensesPeriod="Total" expenses={expenses} />;
};

export default AllExpenses;
