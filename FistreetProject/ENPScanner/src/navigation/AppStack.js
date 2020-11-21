import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import ItemList from '../screens/Login';
import Profile from '../screens/ItemList';
import Home from '../screens/Home';
import Scanner from '../screens/CameraScanner'
import ScannedItems from '../screens/ScannedItems'



const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={ItemList}
        options={{
          tabBarLabel: 'Items',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const StackNaV=()=> {
return(
  <Stack.Navigator>
  <Stack.Screen
      name="Home"
      component={Home}
      initialRouteName = "Home"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          //fontFamily: 'Kufam-SemiBoldItalic',
          fontSize:18
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
       
      }}
    />
    <Stack.Screen
      name="Items"
      component={ItemList}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          //fontFamily: 'Kufam-SemiBoldItalic',
          fontSize:18
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
       
      }}
    />
    <Stack.Screen
      name="Scanner"
      component={Scanner}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          //fontFamily: 'Kufam-SemiBoldItalic',
          fontSize:18
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      
      }}
    />
    <Stack.Screen
      name="ScannedItems"
      component={ScannedItems}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          //fontFamily: 'Kufam-SemiBoldItalic',
          fontSize:18
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      
      }}
    />


    </Stack.Navigator>
)
}

export default StackNaV;