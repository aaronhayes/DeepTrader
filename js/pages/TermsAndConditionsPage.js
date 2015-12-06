import React, { Component, StyleSheet,
  Text, View } from 'react-native';

export default class TermsAndConditionsPage extends Component {
  render() {
    const { actions } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Terms and Conditions
        </Text>
        <Text styes={styles.text} onPress={actions.pop}>Go back!</Text>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#333",
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#E3E3E3',
  }
});
