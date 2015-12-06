import React, { Component, StyleSheet,
  Text, View } from 'react-native';

export default class SettingsPage extends Component {
  render() {
    const { actions } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Settings
        </Text>
        <Text onPress={actions.routes.signIn()}>Logout</Text>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
