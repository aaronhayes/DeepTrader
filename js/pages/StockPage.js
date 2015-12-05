import React, {Image, View, StyleSheet, Component} from 'react-native';

export default class StockPage extends Component {
  render() {
    const stockCode = this.props.routerData.stockCode;
    const uri = 'http://cdn.simplywall.st//snowflake//ASX-' + stockCode + '.png';
    return (
      <View style={styles.container}>
        <Image source={{uri: uri}} style={{width: 300, height:350}} />
      </View>
    );
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
});
