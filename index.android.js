import React from 'react-native';

import routes from './js/configs/routes';
import NavigationBarRouteMapper from './js/components/NavigationBarRouteMapper';

var {
  AppRegistry, Navigator, StyleSheet, View
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navBar: {
    backgroundColor: 'white',
  },
});

const DeepTrader = React.createClass({
  renderScene(route, navigator) {
    const newRoute = routes[route.name];
    const Page = newRoute.component;
    return (
      <View style={styles.container}>
        <Page
          navigator={navigator}
          route={route}
          routeProps={route.props}
        />
      </View>
    );
  },
  render() {
    return (
      <Navigator
        initialRoute={{name: 'welcome'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    )
  }
})

AppRegistry.registerComponent('DeepTrader', () => DeepTrader);
