import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {colors, metrics} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }

  selectItem = () => {
    this.setState({checked: !this.state.checked});
  };

  render() {
    const {name, cost} = this.props;
    let styleTeam = [styles.containerTeam];
    if (this.state.checked) styleTeam.push(styles.selected);
    return (
      <TouchableOpacity
        style={styleTeam}
        onPress={this.selectItem}
        onLongPress={this.selectItem}>
        <Text style={[styles.itemTeam, {fontWeight: 'bold'}]}>{name}</Text>
        {this.state.checked ? (
          <Icon name="done" size={25} style={styles.icon} />
        ) : null}
        <Text style={styles.cost}>{cost}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Team);

const styles = StyleSheet.create({
  containerTeam: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.baseMargin,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: metrics.baseRadius,
  },
  selected: {
    backgroundColor: '#E8F0FE',
  },

  itemTeam: {
    color: '#434343',
    fontSize: 16,
  },
  cost: {
    color: '#434343',
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
  icon: {
    color: '#019AE8',
  },
});
