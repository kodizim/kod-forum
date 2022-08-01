import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./Login.style";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = ({ navigation }) => {
  const reDirectSignup = () => {
    navigation.navigate("SignupPage");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/kodizimyesil.png")}
        />
        <Text style={styles.header_text}>Giriş Yap</Text>
      </View>
      <View style={styles.form}>
        <Input label="E-mail" placeholder="yourname@example.com" />
        <Input label="Password" placeholder="yourpassword" isSecure="true" />
        <View style={styles.buttons}>
          <Button title="Giriş Yap" />
          <Text style={styles.or}>Ya da</Text>
          <Button title="Google ile devam et" />
        </View>
      </View>
      <View style={styles.bottom_container}>
        <Text style={styles.accountText}>Hesabınız yok mu?</Text>
        <TouchableOpacity onPress={reDirectSignup}>
          <Text style={styles.signup}>Kayıt olun {">"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
