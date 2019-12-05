import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  Text,
  AsyncStorage,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import Header from '../../components/header';
import Team from '../../components/team';
import {colors, metrics} from '../../styles';

export default class newmeeting extends Component {
  state = {
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
      {
        id: 7,
        name: 'Alessandro Solyom',
        cost: 'R$ 85,00/h',
      },
      {
        id: 8,
        name: 'Adilson Ribas',
        cost: 'R$ 95,00/h',
      },
      {
        id: 9,
        name: 'Rebeca Tobias',
        cost: 'R$ 85,00/h',
      },
      {
        id: 10,
        name: 'Rubens Sciena',
        cost: 'R$ 85,00/h',
      },
      {
        id: 11,
        name: 'Ângela Bot',
        cost: 'R$ 125,00/h',
      },
      {
        id: 12,
        name: 'Alessandro Solyom',
        cost: 'R$ 85,00/h',
      },
      {
        id: 13,
        name: 'Adilson Ribas',
        cost: 'R$ 95,00/h',
      },
      {
        id: 14,
        name: 'Rebeca Tobias',
        cost: 'R$ 85,00/h',
      },
    ],
  };

  renderList = ({item}) => (
    <Team
      key={item.id}
      id={item.id.toString()}
      name={item.name}
      cost={item.cost}
    />
  );

  loadMembers = () => {
    this.setState({refreshing: true});
    this.setState({members: this.state.members});
    this.setState({refreshing: false});
  };

  next = () => {
    const {navigation} = this.props;
    navigation.navigate('meeting');
  };

  render() {
    const {members, refreshing} = this.state;

    return (
      <View style={styles.container}>
        <Header title="New Meeting" backIcon={true} backPage="welcome" />
        <Text style={styles.title}>Title</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Select members</Text>

        <FlatList
          style={styles.scrollview}
          data={members}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderList}
          onRefresh={this.loadMembers}
          refreshing={refreshing}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={this.next}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },

  body: {
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
  },

  title: {
    textAlign: 'left',
    color: '#019AE8',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: metrics.baseMargin * 2,
    marginLeft: metrics.baseMargin,
  },

  label: {
    textAlign: 'left',
    color: '#019AE8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: metrics.baseMargin,
  },

  titleLast: {
    textAlign: 'left',
    color: colors.materialIndigo,
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 10,
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },

  input: {
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
    borderColor: colors.light,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    marginBottom: 15,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 16,
  },

  scrollview: {
    backgroundColor: colors.light,
    flex: 1,
  },

  button: {
    backgroundColor: '#019AE8',
    borderRadius: metrics.baseRadius,
    height: 40,
    width: metrics.screenWidth - 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },

  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    color: colors.white,
    paddingRight: 5,
  },
});
