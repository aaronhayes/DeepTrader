import React, {StyleSheet, Component, Text,
  View,} from 'react-native';

export default class DashboardPage extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Market Overview</Text>
        <Text style={styles.sectionTitle}>Latest ASX News</Text>
        <Text style={styles.sectionTitle}>Your Watchlists</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});
