import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";

const NoExpense = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You don't have any expenses yet. Add one now!
      </Text>
    </View>
  );
};

export default NoExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "600",
    color: colors.danger400,
    textAlign: "center",
  },
});
