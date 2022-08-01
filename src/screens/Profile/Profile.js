import React from "react";
import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import styles from "./Profile.style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../constants/Colors/Colors";

import EntryCard from "../../components/EntryCard";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile_info}>
        <Image
          style={styles.profile_picture}
          source={require("../../assets/img/blank.png")}
        />
        <Text style={styles.username}>@alperenorhan</Text>
        <Text style={styles.title}>Junior Mobile Developer</Text>
        <View style={styles.icons}>
          <Icon
            style={styles.icon}
            size={34}
            color={COLORS.white}
            name="github"
          />
          <Icon
            style={styles.icon}
            size={34}
            color={COLORS.white}
            name="twitter"
          />
          <Icon size={34} color={COLORS.white} name="linkedin" />
        </View>
      </View>
      <View style={styles.last_entries}>
        <Text style={styles.last_entries_title}>Son Entryler</Text>
        <View style={{ marginBottom: 50 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <EntryCard />
            <EntryCard />
            <EntryCard />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Profile;
