//IOS code in here...

//Import Library to help create Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a Component
//can be refactored as so:
// const App = () => (
//   <Text>Hello, World!</Text>
// );

const App = () => {
  return (
    <Text>Hello, World!</Text>
  );
};



//render it to the device
AppRegistry.registerComponent('albums', () => App);
