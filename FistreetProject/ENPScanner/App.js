/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation/index'

const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <>
     <SafeAreaView style = {{flex:1}}>
        <AppNavigation/>
        </SafeAreaView>
    </>
  );
};


export default App;
