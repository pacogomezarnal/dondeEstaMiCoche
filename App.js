import React from 'react';
import { Home } from './app/views/Home.js';
import { Sitio } from './app/views/Sitio.js';
import { Nuevo } from './app/views/Nuevo.js';
import { CameraView } from './app/views/CameraView.js';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
{
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      header: null
    }
  },
  Sitio :{
    screen: Sitio,
    navigationOptions: {
      title: 'Sitio',
      header: null
    }
  }
  ,
  Nuevo :{
    screen: Nuevo,
    navigationOptions: {
      title: 'Nuevo',
      header: null
    }
  } ,
  CameraView :{
    screen: CameraView,
    navigationOptions: {
      title: 'CameraView',
      header: null
    }
  }
},
{
  initialRouteName: "Home"
}
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}

