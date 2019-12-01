import React, {Component} from 'react';
import {apiGH} from '../../services/api';
import Header from '../../components/header';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import History from '../../components/history';
import Meeting from '../../components/meeting';

export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      loading: false,
      refreshing: false,
      error: false,
      lastMettings: [
        {
          id: 0,
          date: '15/06/19',
          title: 'Novo ECM INFRA',
          duration: '1h54m',
          cost: 'R$ 1.254,34',
          bgColor: '#ff0000',
        },
        {
          id: 1,
          date: '25/06/19',
          title: 'SIAP: Planning 23',
          duration: '3h00m',
          cost: 'R$ 254,34',
          bgColor: '#00ff00',
        },
        {
          id: 2,
          date: '30/06/19',
          title: 'SIAP - Retrospective 23',
          duration: '1h00m',
          cost: 'R$ 1.650,00',
          bgColor: '#FFFF00',
        },
        {
          id: 3,
          date: '30/06/19',
          title: 'SIAP - Retrospective 23',
          duration: '1h00m',
          cost: 'R$ 1.650,00',
          bgColor: '#ff0000',
        },
        {
          id: 4,
          date: '30/06/19',
          title: 'SIAP - Retrospective 23',
          duration: '1h00m',
          cost: 'R$ 1.650,00',
          bgColor: '#00ff00',
        },
        {
          id: 5,
          date: '30/06/19',
          title: 'SIAP - Retrospective 23',
          duration: '1h00m',
          cost: 'R$ 1.650,00',
          bgColor: '#FFFF00',
        },
        {
          id: 6,
          date: '30/06/19',
          title: 'SIAP - Retrospective 23',
          duration: '1h00m',
          cost: 'R$ 1.650,00',
          bgColor: '#ff0000',
        },
        {
          id: 7,
          date: '30/06/19',
          title: 'SIAP - Retrospective 23',
          duration: '1h00m',
          cost: 'R$ 1.650,00',
          bgColor: '#FFFF00',
        },
        {
          id: 8,
          date: '30/06/19',
          title: 'SIAP - Retrospective 23',
          duration: '1h00m',
          cost: 'R$ 1.650,00',
          bgColor: '#00ff00',
        },
      ],
    };
  }

  checkUserExists = async username => {
    const user = await apiGH.get(`/users/${username}`);
    // const user = '';
    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;

    this.setState({loading: true});

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
      navigation.navigate('repositories');
    } catch (err) {
      this.setState({loading: false, error: true});
    }
  };

  repo = () => {
    navigation.navigate('newmeeting');
  };

  renderList = ({item}) => (
    <Meeting
      key={item.id}
      id={item.id.toString()}
      date={item.date}
      title={item.title}
      duration={item.duration}
      cost={item.cost}
      bgColor={item.bgColor}
    />
  );

  // renderList = ({ item }) => (
  //   <History
  //     key={item.id}
  //     id={item.id.toString()}
  //     date={item.date}
  //     title={item.title}
  //     duration={item.duration}
  //     cost={item.cost}
  //   />
  // );

  loadMeetings = () => {
    this.setState({refreshing: true});
    this.setState({lastMettings: this.state.lastMettings});
    this.setState({refreshing: false});
  };

  render() {
    const {username, loading, error, lastMettings, refreshing} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header title="Final Meeting Calculator" backIcon={false} />

        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('newmeeting');
            }}>
            <Icon name="note-add" size={30} style={styles.icon} />
            <Text style={styles.buttonText}>New Meeting</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('members');
            }}>
            <Icon name="group-add" size={30} style={styles.icon} />
            <Text style={styles.buttonText}>Members</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleLast}>My Meetings</Text>
          <TouchableOpacity>
            <Icon name="delete-forever" size={30} style={styles.iconBar} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.scrollview}
          data={lastMettings}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderList}
          onRefresh={this.loadMeetings}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
