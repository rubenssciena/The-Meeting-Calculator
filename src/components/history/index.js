import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { withNavigation } from "react-navigation";

import styles from "./styles";

class History extends Component {
  gotoDetails = async () => {
    const { navigation, id } = this.props;
    await AsyncStorage.setItem("@fmc:meetingkey", id);
    navigation.navigate("detail");
  };
  render() {
    return (
      <View style={styles.containerHistory} onTouchEnd={this.gotoDetails}>
        <View style={styles.containerHistoryRow}>
          <Text style={styles.textHistory}>{this.props.cost}</Text>
          <Text style={styles.textHistory}>{this.props.duration}</Text>
        </View>
        <View style={styles.containerHistoryRow}>
          <Text style={styles.textHistory2}>{this.props.title}</Text>
          <Text style={styles.textHistory2}>{this.props.date}</Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(History);
