import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Expense as ExpenseType } from "../store/expenses";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

interface Props {
  expense: ExpenseType;
}

const dateFormater = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

const Expense = ({ expense }: Props) => {
  const { id, title, amount, date } = expense;

  const navigation = useNavigation<any>();

  function handlePress() {
    navigation.navigate("ManageExpenses", { expenseId: id });
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={[styles.textBase, styles.title]}>
            {title}
          </Text>
          <Text style={styles.textBase}>
            {dateFormater.format(new Date(date))}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Expense;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  textBase: {
    color: colors.neutral500,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.primary300,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
