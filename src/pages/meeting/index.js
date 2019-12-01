import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, metrics} from '../../styles';
import Header from '../../components/header';

const meetingKey = '';

export default class meeting extends Component {
  state = {
    meetingKey: '',
    playing: false,
    started: false,
    members: [
      {id: 1, name: 'Mauris dictum ligula'},
      {id: 2, name: 'Sed et lorem sed augue'},
      {id: 3, name: 'Nam neque eu posuere'},
      {id: 4, name: 'Quisque massa egestas'},
      {id: 5, name: 'Duis quis sapien semper'},
      {id: 6, name: 'Facilisis dictum at non risus'},
      {id: 7, name: 'Sed vitae tellus'},
    ],
  };

  // componentWillMount = async () => {
  //   this.setState({
  //     meetingKey: await AsyncStorage.getItem('@fmc:meetingkey'),
  //   });
  // };

  play = () => {
    this.setState({playing: true, started: true});
    //alert(this.state.playing);
  };
  pause = () => {
    this.setState({playing: false});
  };
  stop = () => {
    this.setState({playing: false, started: false});
  };

  render() {
    let iconPlay = [styles.icon];
    if (this.state.playing) {
      iconPlay.push(styles.iconDisabled);
    }
    let iconPause = [styles.icon];
    if (!this.state.playing) {
      iconPause.push(styles.iconDisabled);
    }
    let iconStop = [styles.icon];
    if (!this.state.started) {
      iconStop.push(styles.iconDisabled);
    }

    return (
      <View style={styles.container}>
        <Header title="Meeting" backIcon={true} backPage="welcome" shareIcon />
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[styles.title, {flex: 1}]}>
              Reunião Gerencial - DTI
            </Text>
          </View>
          {this.state.members.map(item => (
            <Text key={item.id} style={styles.member}>
              {item.name}
            </Text>
          ))}
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <Text style={styles.titleData}>Start</Text>
              <Text style={styles.textData}>06/08/2019 --:--</Text>
            </View>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                disabled={this.state.playing}
                onPress={this.play}>
                <Icon name="play-arrow" size={50} style={iconPlay} />
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!this.state.playing}
                onPress={this.pause}>
                <Icon name="pause" size={50} style={iconPause} />
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!this.state.started}
                onPress={this.stop}>
                <Icon name="stop" size={50} style={iconStop} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{flex: 2}}>
              <Text style={styles.titleData}>Duration</Text>
              <Text style={styles.textData}>00:00:00</Text>
            </View>
            <View style={{flex: 3}}>
              <Text style={styles.titleData}>Cost</Text>
              <Text style={[styles.textData, {borderColor: '#ff0000'}]}>
                R$ 0,00
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  containerButtons: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    color: '#019AE8',
  },
  iconDisabled: {
    opacity: 0.3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: metrics.baseMargin,
    paddingLeft: 10,
    paddingBottom: 10,
    marginTop: 10,
    margin: metrics.baseMargin,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
    color: '#434343',
  },
  member: {
    backgroundColor: '#E8F0FE',
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 3,
    fontSize: 16,
    color: 'black',
  },
  titleData: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    color: '#019AE8',
  },
  textData: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: metrics.baseMargin,
    paddingLeft: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
    color: '#434343',
  },
  button: {
    marginRight: 10,
    color: '#019AE8',
  },
});
