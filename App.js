/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './src/assets/styles';
import RepositoryContainer from './src/containers/RepositoryContainer'

import { Provider } from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux'
import repoReducer from './src/store/reducers/reducer'

import thunk from "redux-thunk";


const rootReducer = combineReducers({repoReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))


const App = () => {

  return(
    <SafeAreaView>
    <View style={styles.sectionContainer}>
      <Provider store={store}>
      <RepositoryContainer />
      </Provider>
    </View>
    </SafeAreaView>
  );

}


export default App;
