import { View, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import colors from "../constants/colors";
import IconButton from "../components/IconButton";
import AddExpense from "../components/AddExpense";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeExpense } from "../store/expenses";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const ManageScreen = ({ navigation, route }: Props) => {
  const expenseId = route.params?.expenseId;
  const expese = useAppSelector((state) =>
    state.expenses.find((expense) => expense.id === expenseId)
  );
  const isEditing = !!expenseId;
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function handleClose() {
    navigation.goBack();
  }

  function handleDelete() {
    if (!expenseId) return;
    dispatch(removeExpense(expenseId));
    handleClose();
  }

  return (
    <View style={styles.container}>
      <AddExpense
        handleClose={handleClose}
        expense={expese}
        isEditing={isEditing}
      />
      {isEditing && (
        <View style={styles.trashWrapper}>
          <IconButton
            name="trash"
            onPress={handleDelete}
            color={colors.danger500}
            size={24}
          />
        </View>
      )}
    </View>
  );
};

export default ManageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary50,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  trashWrapper: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.neutral400,
    alignItems: "center",
  },
});
