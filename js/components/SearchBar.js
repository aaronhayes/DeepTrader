import React from 'react-native';

var {
  TextInput,
  StyleSheet,
  View
} = React;

export default React.createClass({
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoComplete="none"
          autoCorrect={false}
          onChange={this.props.onSearchChange}
          placeholder={this.props.placeholder}
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  searchBar: {
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  },
});
