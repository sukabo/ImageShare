/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import imagesReducer from './reducers/images';
import ImagesList from './screens/ImagesList';
import MyImages from './screens/MyImages';
import Camera from './screens/Camera';


let Navigator;
if (Platform.OS === 'ios') {
  
  Navigator = createBottomTabNavigator({
      ImagesList,
      MyImages,
      Camera,
    },{
      tabBarOptions: {
        inactiveTintColor: '#aaa',
        activeTintColor: '#000',
        showLabel: false,
      }
    });
} else {
  Navigator = DrawerNavigator({
    ImagesList,
    MyImages,
    Camera,
  });
}

let AppContainer = createAppContainer(Navigator);

let store =  createStore(combineReducers({imagesReducer}), applyMiddleware(thunk));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
