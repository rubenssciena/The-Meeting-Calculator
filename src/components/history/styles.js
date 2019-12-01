import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  containerHistory: {
    flex: 0,
    flexDirection: "column",
    backgroundColor: colors.white,
    textAlign: "left",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: metrics.baseRadius * 2
  },

  textHistory: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darker
  },

  textHistory2: {
    textAlign: "left",
    fontSize: 18,
    color: colors.darker
  },

  containerHistoryRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
