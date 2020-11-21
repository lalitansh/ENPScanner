import React,{useEffect, useState} from 'react';
import {
View,
Text,
StyleSheet,
SafeAreaView,
TouchableOpacity
} from 'react-native';
import Colors from '../utils/Colors'

const Home=({navigation, routes})=> {

  const [scannedItems, setScannedItems] = useState([])


useEffect(()=>{
  console.log('reached hook')
})

receivedItemList=(item)=> {
  console.log('reached', item);
  setScannedItems([...scannedItems, item]);
  console.log('scannedItems',scannedItems);
}

return(
  <View style = {styles.Container}>
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
    onPress = {()=>navigation.navigate('Scanner', {receivedItemList})}
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


    {scannedItems.length === 0 ? null : <View style ={{
      justifyContent : 'center',
      alignItems:'center',
      marginTop:30
    }}><TouchableOpacity style = {{height : 50 , 
    width : '30%', 
    backgroundColor : 'red',
    justifyContent : 'center',
    alignItems:'center'
    }}
    onPress = {()=>navigation.navigate('ScannedItems', {scannedItems})}
    >
    <Text style = {{color : Colors.white, fontSize : 18, fontWeight : '600'}}>Scanned List</Text>
    </TouchableOpacity>
    </View>
    }

    </View>
  </View>
)
}

export default Home;

const styles = StyleSheet.create({
  Container : {
    flex : 1,
   justifyContent : 'center'
  }
})