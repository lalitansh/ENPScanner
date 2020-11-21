import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import StackNaV from './AppStack';
import SplashScreen from 'react-native-splash-screen';

 const AppNav=()=> {

   useEffect(()=>{
      SplashScreen.hide()
    },[])

   return(
<NavigationContainer>
<StackNaV/>
</NavigationContainer>
   )

}

export default AppNav;