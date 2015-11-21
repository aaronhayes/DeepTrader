import React from 'react-native';
import SearchBar from '../components/SearchBar';

var {
  StyleSheet,
  Platform,
  Text, View,
  TouchableHighlight,
  TouchableNativeFeedback,
  ListView
} = React;

export default React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['CL8', 'AHZ', 'CZZ', 'NTC', 'NEA']),
    };
  },
  _pressRow(rowData) {
    this.props.navigator.push({name: 'stock', props: {stock: rowData}});
  },
  _renderRow(rowData){
    let TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;
    return (
      <View style={styles.container}>
        <TouchableComponent onPress={() => this._pressRow(rowData)}>
          <View style={styles.rightContainer}>
              <Text style={styles.title}>{rowData}</Text>
          </View>
        </TouchableComponent>
      </View>
    );
  },
  render() {
    return (
      <View>
        <SearchBar placeholder={"Search For a Stock"}  />
        <View style={styles.separator} />
        <ListView
          ref="listview"
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
