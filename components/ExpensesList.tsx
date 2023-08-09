import { View, FlatList } from "react-native";
import React from "react";
import { Expense as ExpenseType } from "../store/expenses";
import Expense from "./Expense";
import NoExpense from "./NoExpense";

interface Props {
  expenses: ExpenseType[];
}

const ExpensesList = ({ expenses }: Props) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <Expense expense={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 8,
        }}
        ListEmptyComponent={() => <NoExpense />}
      />
    </View>
  );
};

export default ExpensesList;
