import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getStatusBarHeight } from "react-native-status-bar-height";

class Header extends Component {
  goBack = () => {
    const { navigation, backPage } = this.props;
    navigation.navigate(backPage);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./calc2.png")} style={styles.image} />
        <Text style={styles.title}>{this.props.title}</Text>

        {this.props.shareIcon ? (
          <TouchableOpacity style={{ paddingRight: 20 }} onPress={this.goBack}>
            <Icon style={styles.button} name="share" size={25} />
          </TouchableOpacity>
        ) : null}

        {this.props.backIcon ? (
          <TouchableOpacity onPress={this.goBack}>
            <Icon style={styles.button} name="keyboard-arrow-left" size={40} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  container: {
    //height: 60 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight() / 4,
    borderBottomWidth: 1,
    borderBottomColor: "#019AE8",
    flex: 0,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 55,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10
  },
  title: {
    flex: 1,
    color: "#019AE8",
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    color: "#019AE8"
  }
});
