import React from 'react-native';
var {
  Image, View, StyleSheet
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default React.createClass({
  render() {
    const props = this.props.routeProps;
    const uri = 'http://cdn.simplywall.st//snowflake//ASX-' + props.stock + '.png';
    return (
      <View style={styles.container}>
        <Image source={{uri: uri}} style={{width: 300, height:350}} />
      </View>
    );
  }
});
