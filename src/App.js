import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    NativeModules,
    Platform
  } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { persistCombineReducers, persistStore } from 'redux-persist'
import * as reducers from './reducers'
import storage from 'redux-persist/es/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PersistGate } from 'redux-persist/es/integration/react'
import thunk from 'redux-thunk'
import MainScreen from '../src/components/MainScreen'

const middlewares = [thunk]
const enhancers = [applyMiddleware(...middlewares)]

const config = {
  key: 'root',
  storage
}

const reducer = persistCombineReducers(config, reducers)

function configureStore () {
    let store = createStore(reducer, composeWithDevTools(...enhancers))
    let persistor = persistStore(store)
  
    return { persistor, store }
  }
  
  const { persistor, store } = configureStore()

  export default class App extends Component {
    render () {
      return (
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <MainScreen />
          </Provider>
        </PersistGate>
      )
    }
  }