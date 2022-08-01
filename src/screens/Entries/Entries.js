import React from "react";
import { SafeAreaView, Text, Image, View, ScrollView } from "react-native";
import styles from "./Entries.style";
import EntryCard from "../../components/EntryCard";

const Entries = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/kodizimyesil.png")}
        />
      </View>
      <ScrollView>
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Entries;
