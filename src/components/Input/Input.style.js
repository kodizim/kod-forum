import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    marginHorizontal: 46,
    marginVertical: 12,
  },
  label: {
    fontSize: 15,
    color: COLORS.white,
    opacity: 0.8,
    marginBottom: 17,
  },
  input: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    color: COLORS.white,
    opacity: 0.6,
    paddingVertical: 7,
  },
});
