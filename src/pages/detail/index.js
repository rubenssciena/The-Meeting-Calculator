//
// MEETING DETAILS
//
import React, {Component} from 'react';
import {StyleSheet, View, Text, AsyncStorage, FlatList} from 'react-native';
import {colors, metrics} from '../../styles';
import Header from '../../components/header';

const meetingKey = '';

export default class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingKey: '',
      refreshing: false,
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

    return (
      <View style={styles.container}>
        <Header
          title="Meeting Details"
          backIcon={true}
          backPage="welcome"
          shareIcon
        />
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
          <View>
            <Text style={styles.titleData}>Start</Text>
            <Text style={styles.textData}>06/08/2019 16:00</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{flex: 2}}>
              <Text style={styles.titleData}>Duration</Text>
              <Text style={styles.textData}>02:23:33</Text>
            </View>
            <View style={{flex: 3}}>
              <Text style={styles.titleData}>Cost</Text>
              <Text style={[styles.textCost, {borderColor: '#ff0000'}]}>
                R$ 1.253,24
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
  scrollview: {
    flex: 1,
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
