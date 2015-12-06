import React, {Component, TouchableNativeFeedback,
  TouchableHighlight, Platform, Text} from 'react-native';

export default class DefaultNavBarRightItem extends Component {
  render() {
    let TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;
    return (
      <TouchableComponent>
        <Text>New</Text>
      </TouchableComponent>
    );
  }
}
