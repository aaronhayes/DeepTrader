import React from 'react-native';
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

export default React.createClass({
  _onLogin() {
    this.props.navigator.replaceAtIndex({name:'list'}, 0);
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onLogin} >
          <Text style={styles.welcome}>
            Deep Trader Log In
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
});

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
