import React from "react";
import { SafeAreaView, Text, Image, View, ScrollView } from "react-native";
import styles from "./Entries.style";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import EntryCard from "../../components/EntryCard";
import CategoryCard from "../../components/CategoryCard";
import { create } from "react-test-renderer";

const Tab = createMaterialBottomTabNavigator();

const Entries = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/kodizimyesil.png")}
        />
      </View>
      <ScrollView
        style={styles.categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <CategoryCard category_title={"Android"} />
        <CategoryCard category_title={"Javascript"} />
        <CategoryCard category_title={"iOS"} />
        <CategoryCard category_title={"Backend"} />
        <CategoryCard category_title={"Frontend"} />
        <CategoryCard category_title={"React"} />
        <CategoryCard category_title={"React Native"} />
        <CategoryCard category_title={"Web Development"} />
      </ScrollView>
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
