import React from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import styles from "./Signup.style";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/kodizimyesil.png")}
        />
        <Text style={styles.header_text}>Kaydol</Text>
      </View>
      <Input label="Username" placeholder="yourusername" />
      <Input label="E-mail" placeholder="yourname@example.com" />
      <Input label="Password" placeholder="yourpassword" isSecure="true" />
      <Input
        label="Password Again"
        placeholder="yourpassword"
        isSecure="true"
      />
      <Button title="Giriş Yap" />
      <Text style={styles.or}>Ya da</Text>
      <Button title="Google ile devam et" />
    </SafeAreaView>
  );
};

export default Signup;
