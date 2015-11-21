import React from 'react-native';
var {
  StyleSheet,
  Text, ScrollView,
  TouchableHighlight,
  ListView
} = React;

export default React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['CL8', 'AHZ', 'CZZ', 'NTC', 'NEA', 'AHZ', 'CZZ', 'NTC', 'NEA', 'AHZ', 'CZZ', 'NTC', 'NEA', 'AHZ', 'CZZ', 'NTC', 'NEA', 'AHZ', 'CZZ', 'NTC', 'NEA', 'AHZ', 'CZZ', 'NTC', 'NEA', 'AHZ', 'CZZ', 'NTC', 'NEA']),
    };
  },
  _pressRow(rowData) {
    this.props.navigator.push({name: 'stock', props: {stock: rowData}});
  },
  _renderRow(rowData){
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowData)}>
        <Text>{rowData}</Text>
      </TouchableHighlight>
    )
  },
  render() {
    return (
      <ScrollView
        style={styles.wrapper}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </ScrollView>
    )
  }
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 70
  }
});
