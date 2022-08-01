import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 8,
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 20,
  },
  content: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 5,
  },
  bottom: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subject: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: COLORS.white,
    marginRight: 3,
  },
  subject_title: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  writer: {
    color: COLORS.white,
    opacity: 0.5,
  },
});
