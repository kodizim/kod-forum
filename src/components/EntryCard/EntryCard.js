import React from "react";
import { View, Text } from "react-native";
import styles from "./EntryCard.style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const EntryCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>#Entryname</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras
        sed felis.
      </Text>
      <View style={styles.bottom}>
        <View style={styles.subject}>
          <Icon name="information" size={20} style={styles.icon} />
          <Text style={styles.subject_title}>Android</Text>
        </View>
        <Text style={styles.writer}>Posted by @alperenorhan</Text>
      </View>
    </View>
  );
};

export default EntryCard;
