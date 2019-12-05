//
// MEETING PLAYING
//
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, metrics} from '../../styles';
import Header from '../../components/header';

const meetingKey = '';

export default class meeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingKey: '',
      refreshing: false,
      playing: false,
      started: false,
      members: [
        {
          id: 0,
          name: 'Rubens Sciena',
          cost: 'R$ 85,00/h',
        },
        {
          id: 1,
          name: 'Ângela Bot',
          cost: 'R$ 125,00/h',
        },
        {
          id: 2,
          name: 'Alessandro Solyom',
          cost: 'R$ 85,00/h',
        },
        {
          id: 3,
          name: 'Adilson Ribas',
          cost: 'R$ 95,00/h',
        },
        {
          id: 4,
          name: 'Rebeca Tobias',
          cost: 'R$ 85,00/h',
        },
        {
          id: 5,
          name: 'Rubens Sciena',
          cost: 'R$ 85,00/h',
        },
        {
          id: 6,
          name: 'Ângela Bot',
          cost: 'R$ 125,00/h',
        },
      ],
    };
  }

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

  renderList({item}) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#eee',
          marginBottom: 2,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Text key={item.id} style={[styles.member, {fontWeight: 'bold'}]}>
          {item.name}
        </Text>
        <Text style={styles.member}>{item.cost}</Text>
      </View>
    );
  }

  loadMembers = () => {
    this.setState({refreshing: true});
    this.setState({members: this.state.members});
    this.setState({refreshing: false});
  };

  render() {
    const {members, refreshing} = this.state;

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
        <Header title="Meeting" backIcon={true} backPage="welcome" />
        <View style={{flex: 1}}>
          <Text style={styles.titleData}>Title</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.textData, {flex: 1}]}>
              Reunião Gerencial - DTI
            </Text>
          </View>
          <Text style={styles.titleData}>Members</Text>
          <FlatList
            data={members}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderList}
            onRefresh={this.loadMembers}
            refreshing={refreshing}
          />
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
              <Text style={[styles.textCost, {borderColor: '#00ff00'}]}>
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
    alignItems: 'flex-end',
  },
  icon: {
    color: '#019AE8',
  },
  iconDisabled: {
    opacity: 0.3,
  },
  member: {
    backgroundColor: '#eee',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    color: 'black',
  },
  titleData: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#019AE8',
  },
  textCost: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 4,
    paddingLeft: 10,
    paddingBottom: 2,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: '#eee',
    color: '#434343',
  },
  textData: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
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
