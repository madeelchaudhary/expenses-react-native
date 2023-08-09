import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";
import React from "react";
import colors from "../constants/colors";

interface Props {
  label: string;
  config?: TextInputProps;
  invalid?: boolean;
}

const Input = ({ label, config, invalid }: Props) => {
  const isMultiline = config?.multiline;
  const inputStyles: object[] = [styles.input];

  if (isMultiline) {
    inputStyles.push(styles.multiline);
  }

  if (invalid) {
    inputStyles.push(styles.errorInput);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...config} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: colors.neutral500,
    borderRadius: 4,
    backgroundColor: colors.primary100,
  },
  multiline: {
    textAlignVertical: "top",
    minHeight: 100,
  },
  errorInput: {
    backgroundColor: colors.danger400,
  },
});
