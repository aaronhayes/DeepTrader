'use strict';

import React, { Component, StyleSheet, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute,
  Animations
} from 'react-native-router-redux';

import DefaultNavBarRightItem from '../components/DefaultNavBarRightItem';

import WelcomePage from '../pages/WelcomePage';
import LearnMorePage from '../pages/LearnMorePage';
import TermsAndConditionsPage from '../pages/TermsAndConditionsPage';

import DashboardPage from '../pages/DashboardPage';
import ListPage from '../pages/ListPage';
import StockPage from '../pages/StockPage';

import WatchlistsPage from '../pages/WatchlistsPage';

import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';

const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

const defaultSchema = {
  navBar: NavBar,
  navLeftColor: '#FFFFFF',
  navTint: '#32DEAF',
  navTitleColor: '#FFFFFF',
  navTitleStyle: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
  },
  statusStyle: 'light-content',
  tabBar: TabBar,
  navRightTitle: 'Alerts', //<DefaultNavBarRightItem />
  navRightColor: "#FFFFFF",
};

const assets = {
  'logo': require('../../assets/logos/qwikly.png'),
  'home': require('../../assets/icons/thin-0046_home_house.png'),
  'profile': require('../../assets/icons/thin-0091_file_profile_user_personal.png'),
};


class Application extends Component {
  render() {
    return (
      <Router {...this.props} assets={assets} initial="signIn">
        <Schema name="default" {...defaultSchema} />
        <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} />

        <Route name="signIn" component={WelcomePage} type="reset" hideNavBar={true} />
        <Route name="learn" component={LearnMorePage} schema="modal" />
        <Route name="terms" component={TermsAndConditionsPage} schema="modal" />

        <Route name="stockPage" component={StockPage} />

        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="home" component={DashboardPage} title="Dashboard" tabItem={{icon: assets['home'], title: 'Home'}}  />
          <Route name="search" component={ListPage} title="Search" tabItem={{icon: assets['home'], title: 'Search'}} />
          <Route name="watchlists" component={WatchlistsPage} title="Watchlists" tabItem={{icon: assets['home'], title: 'Watchlists'}}  />
          <Route name="profile" component={ProfilePage} title="Profile" tabItem={{icon: assets['profile'], title: 'Profile'}}  />
          <Route name="settings" component={SettingsPage} title="Settings" tabItem={{icon: assets['profile'], title: 'Settings'}}  />
        </TabRoute>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
