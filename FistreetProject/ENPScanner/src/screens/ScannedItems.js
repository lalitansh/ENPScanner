import React,{useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  Modal,
  ActivityIndicator
} from 'react-native';
import {
Card
} from 'react-native-paper';
import Colors from '../utils/Colors'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const ScannedItems=({navigation, route})=> {
const [networkData , setNetworkData] = useState([])
const [loading, setLoading] = useState(true)
const [visible, setVisible] = useState(false)
const data = route.params.scannedItems
  useEffect(()=>{
  console.log('data', data)
   
  })


  return(
    <View style = {{flex : 1}}>
    <FlatList
       keyExtractor={(item) => item.id}

        data={data}

      renderItem={({item, index}) =>{
          return(
             
             <View >
             <Card style = {styles.cardParentListView}>
             <View style = {{flex:1,marginLeft : 10,}}>
             <View style = {styles.subView}>
             <Text numberOfLines = {1} style = {{marginTop : 5, fontSize : 17, fontWeight : '500',width :'60%'}}>Item_num -</Text>
             <Text numberOfLines = {1} style = {{marginTop : 5, fontSize : 17, fontWeight : '500',width :'60%'}}>{item.data}</Text>
             </View>
             <View style = {styles.subView}>
             <Text numberOfLines = {1} style = {{color : Colors.grey600 ,marginBottom:13, marginTop:5, fontSize : 17, fontWeight : '500',width :'60%'}}>Item_type -</Text>
             <Text numberOfLines = {1} style = {{color : Colors.grey600,marginBottom:13, marginTop:5, fontSize : 15, fontWeight : '300',width :'60%'}}>{item.type}</Text>
             </View>
           
             </View>
             </Card>
             </View>
            
          )
          }
      }
        />
    </View>
  )
  }


  
  export default ScannedItems;
  
  const styles = StyleSheet.create({
    Container : {
      flex : 1,
    },
    subView : {
      flexDirection : 'row',
      margin : 1
    },
    cardParentListView : {
      borderRadius : 10,
      backgroundColor:'white',
      borderWidth : 0.3,
      width: '98%',
      //marginTop: '1%',
      margin : 3,
      aspectRatio : 5/1,
      ...Platform.select({
        default : {
          shadowColor: '#6b6162',
          shadowOffset: {
          width: 1,
          height: 0.5,
          },
          shadowOpacity: 0.60,
          shadowRadius: 5,
          elevation: 7,
        }
      })
    },
    modalStyle : {

    },
    modalBackground: {
      // flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040',
      
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: '100%',
      width: '100%',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  })

