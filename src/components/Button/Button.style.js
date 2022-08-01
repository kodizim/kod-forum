import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    marginHorizontal: 70,
    width: 250,
    height: 49,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: COLORS.white,
    fontSize: 20,
  },
});
