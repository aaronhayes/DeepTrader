import React from 'react-native';
var {
  StyleSheet,
  Text,
  TouchableHighlight
} = React;

export default React.createClass({
  _onLogin() {
    this.props.navigator.replaceAtIndex({name:'list'}, 0);
  },
  render() {
    return (
      <TouchableHighlight onPress={this._onLogin} >
        <Text style={styles.welcome}>
          Deep Trader Log In
        </Text>
      </TouchableHighlight>
    )
  }
});

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
