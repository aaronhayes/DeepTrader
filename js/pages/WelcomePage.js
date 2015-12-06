import React, { Component, StyleSheet,
  Text, View, TouchableHighlight, Image } from 'react-native';

export default class WelcomePage extends Component {
  render() {
    const { actions, assets } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={assets.logo} />
        <TouchableHighlight onPress={actions.routes.tabBar.home()}>
          <Text style={styles.text}>
            Login with Facebook
          </Text>
        </TouchableHighlight>

        <View style={styles.helpView}>
          <Text style={styles.helpText} onPress={actions.routes.learn()}>Learn More</Text>
          <Text style={styles.helpText} onPress={actions.routes.terms()}>Terms and Condtions</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
  },
  image: {
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 200,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#32DEAF',
  },
  helpView: {
    alignItems: 'center',
  },
  helpText: {
    fontSize: 8,
    paddingTop: 5,
    textAlign: 'center',
    color: '#E3E3E3',
  }
});
