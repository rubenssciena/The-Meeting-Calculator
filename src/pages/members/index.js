import React, { Component } from "react";

import { View, Text, AsyncStorage } from "react-native";

import styles from "./styles";
import Header from "../../components/header";

export default class members extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Members" backIcon={true} backPage="welcome" />
      </View>
    );
  }
}
