import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkbg,
  },
  header: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 22,
  },
  categories: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  logo: {
    width: 75,
    height: 75,
  },
});
