import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {colors, metrics} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import styles from "./styles";

class Meeting extends Component {
  state = {
    checked: false,
  };

  gotoDetails = async () => {
    const {navigation, id} = this.props;
    //await AsyncStorage.setItem("@fmc:meetingkey", id);
    navigation.navigate('detail');
  };

  selectItem = () => {
    this.setState({checked: !this.state.checked});
  };

  render() {
    const {bgColor, title, date, cost} = this.props;
    let styleMeeting = [styles.containerMeeting];
    if (this.state.checked) styleMeeting.push(styles.selected);
    return (
      <TouchableOpacity
        style={styleMeeting}
        onPress={this.gotoDetails}
        onLongPress={this.selectItem}>
        <View style={[styles.meetingBar, {backgroundColor: bgColor}]}></View>
        <View style={styles.containerMeetingText}>
          <Text style={[styles.textHistory, {fontWeight: 'bold'}]}>
            {title}
          </Text>
          <Text style={styles.textHistory}>{date + ' - ' + cost}</Text>
        </View>
        <View style={styles.containerCheckbox}>
          {this.state.checked ? (
            <Icon name="done" size={30} style={styles.icon} />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Meeting);

const styles = StyleSheet.create({
  containerMeeting: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: metrics.baseRadius,
  },
  selected: {
    backgroundColor: '#E8F0FE',
  },
  meetingBar: {
    width: 14,
    height: 65,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  containerMeetingText: {
    flex: 1,
    justifyContent: 'center',
  },
  containerCheckbox: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  textHistory: {
    fontSize: 16,
    color: '#434343',
  },
  icon: {
    color: '#019AE8',
  },
});
