import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white
  },

  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: metrics.basePadding
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

  titleLast: {
    textAlign: "left",
    color: "#019AE8",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
    marginLeft: metrics.baseMargin
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
    backgroundColor: "#019AE8",
    borderRadius: metrics.baseRadius,
    height: 80, // fazer cálculo dinamico
    width: (metrics.screenWidth / 5) * 2, // fazer cálculo dinamico
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
    //padding: 10
  },

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18
  },

  icon: {
    color: colors.white
  },
  iconBar: {
    color: "#019AE8",
    paddingRight: 15
  },

  scrollview: {
    backgroundColor: colors.light
  }
});

export default styles;
