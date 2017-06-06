//IOS code in here...

//Root Component

//Import Library to help create Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a Component


const App = () => {
  return (
    <Text>Hello, World!</Text>
  );
};

//can be refactored as so:
// const App = () => (
//   <Text>Hello, World!</Text>
// );


//render it to the device (since it is the Root/Parent Component)
AppRegistry.registerComponent('albums', () => App);
