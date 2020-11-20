import React from 'react';
import {
View,
Text,
StyleSheet,
SafeAreaView,
TouchableOpacity
} from 'react-native';
import Colors from '../utils/Colors'

const Home=({navigation})=> {
return(
  <SafeAreaView style = {styles.Container}>
  <View>
    
    <View style = {{flexDirection : 'row' , 
   // backgroundColor : 'black',
    justifyContent:'space-around'}}>
    <TouchableOpacity style = {{height : 50 , 
    width : '30%', 
    backgroundColor : 'red',
    justifyContent : 'center',
    alignItems:'center'
    }}
    onPress = {()=>navigation.navigate('Scanner')}
    >
    <Text style = {{color : Colors.white, fontSize: 18, fontWeight : '600'}}>SCAN</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{height : 50 , 
    width : '30%', 
    backgroundColor : 'red',
    justifyContent : 'center',
    alignItems:'center'
    }}
    onPress = {()=>navigation.navigate('Items')}
    >
    <Text style = {{color : Colors.white, fontSize : 18, fontWeight : '600'}}>ITEMS</Text>
    </TouchableOpacity>
    </View>
    </View>
  </SafeAreaView>
)
}

export default Home;

const styles = StyleSheet.create({
  Container : {
    flex : 1,
   justifyContent : 'center'
  }
})