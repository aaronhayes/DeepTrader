import React from 'react-native';
import cssVar from 'cssVar';

import routes from '../configs/routes';

var {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity
} = React;

const styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: cssVar('fbui-bluegray-60'),
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: cssVar('fbui-accent-blue'),
  },
});

export default {
  LeftButton (route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.name}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton (route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigator.immediatelyResetRouteStack([{name: 'welcome'}]);
        }}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Log Out
        </Text>
      </TouchableOpacity>
    );
  },

  Title (route, navigator, index, navState) {
    const currentRoute = routes[route.name];
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {currentRoute.navTitle}
      </Text>
    );
  }
};
