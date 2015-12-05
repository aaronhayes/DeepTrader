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
  TabRoute
} from 'react-native-router-redux';

import DefaultNavBarRightItem from '../components/DefaultNavBarRightItem';

import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import StockPage from '../pages/StockPage';

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
  navRight: <DefaultNavBarRightItem />
};

const assets = {};

class Application extends Component {
  getStockPageTitle() {
    return 'hello';
  }
  render() {
    return (
      <Router {...this.props} assets={assets} initial="signIn">
        <Schema name="default" {...defaultSchema} />

        <Route name="signIn" component={HomePage} type="reset" hideNavBar={true} />
        <Route name="stockPage" component={StockPage} title={this._getStockPageTitle} />

        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="home" component={ListPage} title="Home" tabItem={{systemIcon: 'featured', title: 'Home'}} />
          <Route name="search" component={ListPage} title="Search" tabItem={{systemIcon: 'search', title: 'Search'}} />
          <Route name="watchlists" component={ListPage} title="Watchlists" tabItem={{systemIcon: 'favourites', title: 'Watchlists'}} />
          <Route name="profile" component={ListPage} title="Profile" tabItem={{systemIcon: 'search', title: 'Profile'}} />
        </TabRoute>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
