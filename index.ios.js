//IOS code in here...

//Root Component

//Import Library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a Component


const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

//can be refactored as so:
// const App = () => (
//   <Text>Hello, World!</Text>
// );


//render it to the device (since it is the Root/Parent Component)
AppRegistry.registerComponent('albums', () => App);
