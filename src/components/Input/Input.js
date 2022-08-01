import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./Input.style";

const Input = ({ label, placeholder, isSecure }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
