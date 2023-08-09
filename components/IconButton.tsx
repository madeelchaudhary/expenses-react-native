import { Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: keyof (typeof Ionicons)["glyphMap"];
  size: number;
  color: string;
  onPress: () => void;
}

const IconButton = ({ name, size, color, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
