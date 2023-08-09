import { View, Text, ViewStyle, TextStyle } from "react-native";
import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

interface Props {
  onPress: () => void;
  children: React.ReactNode;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({ onPress, viewStyle, textStyle, children }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.button, viewStyle]}
        onPress={onPress}
      >
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  button: {
    overflow: "hidden",
    backgroundColor: colors.accent500,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
