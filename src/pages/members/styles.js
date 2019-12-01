import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },

  containerButtons: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    justifyContent: "space-around",
    alignItems: "center"
  },

  textMeetings: {
    textAlign: "left",
    fontSize: 18,
    color: colors.black
  },

  textMeetingsB: {
    textAlign: "left",
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold"
  },

  title: {
    textAlign: "center",
    color: colors.black,
    fontSize: 24,
    fontWeight: "bold",
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
    padding: 7
  },

  title2: {
    textAlign: "left",
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.light
  },

  text: {
    textAlign: "center",
    marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21
  },

  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin
  },

  form: {
    marginTop: metrics.baseMargin * 2
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    fontSize: 15,
    paddingHorizontal: metrics.basePadding
  },

  button: {
    backgroundColor: colors.materialIndigo,
    borderRadius: metrics.baseRadius * 2,
    height: 90,
    width: 140,
    marginTop: 5,
    justifyContent: "space-around",
    alignContent: "space-between",
    alignItems: "center",
    padding: 10
  },

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16
  },

  icon: {
    color: colors.white
  }
});

export default styles;
