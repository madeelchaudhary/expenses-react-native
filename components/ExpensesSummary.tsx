import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Expense } from "../store/expenses";
import colors from "../constants/colors";

interface Props {
  period: string;
  expenses: Expense[];
}

const ExpensesSummary = ({ period, expenses }: Props) => {
  const total = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.amount}>${total.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  period: {
    fontSize: 14,
    color: colors.neutral400,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.neutral500,
  },
});
