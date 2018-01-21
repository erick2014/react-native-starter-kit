import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import RootNavigator from './components/rootNavigator/rootNavigator';

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
