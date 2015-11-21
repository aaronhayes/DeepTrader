import React from 'react-native';

import routes from './js/configs/routes';
import NavigationBarRouteMapper from './js/components/NavigationBarRouteMapper';

var {
  AppRegistry, Navigator, StyleSheet
} = React;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
  },
});

const DeepTrader = React.createClass({
  renderScene(route, navigator) {
    const newRoute = routes[route.name];
    const Page = newRoute.component;

    return (
      <Page
        navigator={navigator}
        route={route}
        routeProps={route.props}
      />
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
