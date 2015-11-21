import React from 'react-native';
var {
  Image
} = React;

export default React.createClass({
  render() {
    const props = this.props.routeProps;
    const uri = 'http://cdn.simplywall.st//snowflake//ASX-' + props.stock + '.png';
    return (
      <Image source={{uri: uri}} style={{width: 300, height:350}} />
    )
  }
});
