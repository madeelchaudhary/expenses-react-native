import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MyButton = ({ children }: Props) => {
  const btnStyle =
    Platform.OS === "android"
      ? styles.btn
      : ({ pressed }: { pressed: boolean }) =>
          pressed ? [styles.btn, { backgroundColor: "#181818" }] : styles.btn;

  return (
    <View style={styles.container}>
      <Pressable style={btnStyle} android_ripple={{ color: "#fff" }}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  btn: {
    backgroundColor: "#171717",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
