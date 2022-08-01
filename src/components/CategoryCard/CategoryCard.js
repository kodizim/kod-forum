import React from "react";
import { View, Text } from "react-native";
import styles from "./CategoryCard.style";

const CategoryCard = ({ category_title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category_title}>{category_title}</Text>
    </View>
  );
};

export default CategoryCard;
