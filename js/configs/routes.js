let ROUTES = {}

/**
  * addRoute adds new Scene (route) to the application.\
  * Parameters:
  *   - name UNIQUE identifier of the route
  *   - navTitle Title to be displayed in NavigationBar
  *   - component React Component
  *   - config misc. configurations
  */
function addRoute(name, navTitle, component, config) {
  config = config || {};
  ROUTES[name] = {
    navTitle: navTitle,
    component: component,
    config: config
  };
}

addRoute('welcome', 'Deep Trader', require('../pages/HomePage'), {});
addRoute('list', 'Choose a Stock', require('../pages/ListPage'), {});
addRoute('stock', (route) => {return route.props.stock}, require('../pages/StockPage'), {});

module.exports = ROUTES;
