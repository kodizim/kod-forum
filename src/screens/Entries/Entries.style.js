import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkbg,
  },
  header: {
    alignItems: "center",
    margin: 23,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
