import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense } from "../store/expenses";
import colors from "../constants/colors";

interface Props {
  expenses: Expense[];
  expensesPeriod: string;
}

const Expenses = ({ expensesPeriod, expenses }: Props) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: colors.primary50,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});
