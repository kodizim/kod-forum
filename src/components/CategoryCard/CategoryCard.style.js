import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkgreen,
    width: 140,
    height: 50,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  category_title: {
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: 15,
  },
});
