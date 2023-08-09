import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import Input from "./Input";

import RNDateTimePicker from "@react-native-community/datetimepicker";
import colors from "../constants/colors";
import { useAppDispatch } from "../store/hooks";
import { Expense, addExpense, updateExpense } from "../store/expenses";
import Button from "./Button";

interface Props {
  handleClose: () => void;
  isEditing?: boolean;
  expense?: Expense;
}

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return `${year}-${month}-${day}`;
};

const AddExpense = ({ expense, isEditing, handleClose }: Props) => {
  const dispatch = useAppDispatch();
  const [values, setValues] = React.useState({
    amount: { value: expense?.amount.toString() || "", isValid: true },
    date: { value: new Date(expense?.date || Date.now()), isValid: true },
    description: { value: expense?.title || "", isValid: true },
  });

  const [show, setShow] = React.useState(false);

  const formattedDate = formatDate(values.date.value);

  function onDateChange(newDate: Date) {
    setShow(false);
    setValues((prev) => ({ ...prev, date: { value: newDate, isValid: true } }));
  }

  function handleChange(key: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [key]: { value, isValid: true } }));
  }

  function handleSubmit() {
    const amount = parseFloat(values.amount.value);
    if (
      isNaN(amount) ||
      amount <= 0 ||
      !values.date.value ||
      values.date.value.toString() === "Invalid Date" ||
      !values.description.value.trim() ||
      values.description.value.length > 65
    ) {
      setValues((prev) => ({
        ...prev,
        amount: { ...prev.amount, isValid: !isNaN(amount) && amount > 0 },
        date: {
          ...prev.date,
          isValid:
            !!prev.date.value ||
            (prev.date.value as Date).toString() !== "Invalid Date",
        },
        description: {
          ...prev.description,
          isValid:
            !!prev.description.value.trim() &&
            prev.description.value.length <= 65,
        },
      }));
      return;
    }

    const newExpense = {
      amount,
      date: formattedDate,
      title: values.description.value,
    };

    if (isEditing) {
      dispatch(updateExpense({ ...newExpense, id: expense!.id }));
      handleClose();
      return;
    }
    dispatch(addExpense(newExpense));
    handleClose();
  }

  const isInvalid = Object.values(values).some((v) => !v.isValid);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.group}>
          <Input
            label="Amount"
            invalid={!values.amount.isValid}
            config={{
              keyboardType: "numeric",
              placeholder: "0.00",
              value: values.amount.value,
              onChangeText: (text) => handleChange("amount", text),
            }}
          />
          <Pressable style={styles.full} onPress={() => setShow(true)}>
            <Input
              label="Date"
              invalid={!values.date.isValid}
              config={{
                value: formattedDate,
                editable: false,
              }}
            />
          </Pressable>
          {show && (
            <RNDateTimePicker
              mode="date"
              value={values.date.value}
              maximumDate={new Date()}
              onChange={(_, newDate) => {
                if (newDate) {
                  onDateChange(newDate);
                }
              }}
            />
          )}
        </View>
        <View style={styles.group}>
          <Input
            label="Description"
            invalid={!values.description.isValid}
            config={{
              multiline: true,
              numberOfLines: 3,
              placeholder: "Enter a description",
              value: values.description.value,
              onChangeText: (text) => handleChange("description", text),
            }}
          />
        </View>
        {isInvalid && (
          <Text style={styles.errorText}>Please fill all the fields</Text>
        )}
      </View>
      <View style={styles.btnGroup}>
        <Button
          viewStyle={{ backgroundColor: colors.danger500 }}
          onPress={handleClose}
        >
          Cancel
        </Button>
        <Button onPress={handleSubmit}>{isEditing ? "Update" : "Add"}</Button>
      </View>
    </>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginTop: 60,
    marginBottom: 15,
  },
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  group: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  full: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: colors.primary400,
  },
  errorText: {
    color: colors.danger500,
    marginVertical: 5,
  },
});
