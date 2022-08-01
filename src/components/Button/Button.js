import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.button_text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
