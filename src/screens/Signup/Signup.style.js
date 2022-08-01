import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkbg,
  },
  logo: {
    width: 144,
    height: 144,
    marginBottom: 30,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  header_text: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 36,
  },
  or: {
    color: COLORS.white,
    opacity: 0.6,
    marginVertical: 16,
    textAlign: "center",
  },
  bottom_container: {
    marginHorizontal: 46,
    marginTop: "10%",
  },
  accountText: {
    color: COLORS.white,
    opacity: 0.6,
    marginVertical: 10,
  },
  signup: {
    color: COLORS.white,
  },
});
