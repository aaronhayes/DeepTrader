let ROUTES = {}

function addRoute(name, navTitle, component, isView, config) {
  config = config || {};
  ROUTES[name] = {
    navTitle: navTitle,
    component: component,
    isView: isView,
    config: config
  };
}

addRoute('welcome', 'Deep Trader', require('../pages/HomePage'), false, {});
addRoute('list', 'Choose a Stock', require('../pages/ListPage'), true, {});
addRoute('stock', (route) => {return route.props.stock}, require('../pages/StockPage'), false, {});

module.exports = ROUTES;
