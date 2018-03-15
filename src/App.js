

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers' // implied that index.js will be pulled from reducers folder in path ./reducers
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () =>{
  return (
    <Provider store={ createStore(reducers) }>
      <View style = {{ flex:1 }}>
        <Header headerText='Tech Stack'/>
        <LibraryList/>
      </View>
    </Provider>
  )
}

export default App
