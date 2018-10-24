/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//Pages
import { HomePage } from './pages/home.js';
import { About } from './pages/about.js';

const FirstPage = createStackNavigator({
  Home: HomePage,
  About: About
})

class App extends Component<{}> {
  render() {
    return (
      <FirstPage   />
    );
  }
}

export default App;