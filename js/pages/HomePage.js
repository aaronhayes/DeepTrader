import React, { Component, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class HomePage extends Component {
  render() {
    const { actions } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={actions.routes.tabBar.home()}>
          <Text style={styles.welcome}>
            Deep Trader Log In
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
