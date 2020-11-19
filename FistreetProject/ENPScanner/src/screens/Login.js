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

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Login=()=> {
const [networkData , setNetworkData] = useState([])
const [loading, setLoading] = useState(true)
const [visible, setVisible] = useState(false)

  useEffect(()=>{
    getMoviesFromApiAsync()
  })
//http://erp.fistreet.in:8180/GH_ENV/manufacturing/list/json/fgitemmasterlist
function getMoviesFromApiAsync() {
  return fetch('http://erp.fistreet.in:8180/GH_ENV/manufacturing/list/json/fgitemmasterlist')
    .then((response) => response.json())
    .then((responseJson) => {
      setNetworkData(responseJson)
      setLoading(false)
      console.log('responseJson',responseJson)
      console.log('networkData',networkData)
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

  return(
    <View style = {{flex : 1}}>
    { loading ? ( <View style = {{flex:1}}>
              
              <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                  <ActivityIndicator
                    animating={loading} />
                </View>
              </View>
            </View> )

            :
    
      (<FlatList
       keyExtractor={(item) => item.id.toString() }

        //numColumns={this.state.gridView ? 2 : 1}
        //key={(this.state.gridView ? 'h' : 'v')}
        //horizontal={false}
        data={networkData}

      renderItem={({item, index}) =>{
          return(
             
             <View >
             <Card style = {styles.cardParentListView}>
             <View style = {{flex:1,marginLeft : 10,}}>
             <View style = {styles.subView}>
             <Text numberOfLines = {1} style = {{marginBottom:13, marginTop:5, fontSize : 17, fontWeight : '500',width :'60%'}}>skuno -</Text>
             <Text numberOfLines = {1} style = {{marginBottom:13, marginTop:5, fontSize : 17, fontWeight : '500',width :'60%'}}>{item.skuno}</Text>
             </View>
             <View style = {styles.subView}>
             <Text >Item Description -</Text>
             <Text style = {{alignContent : 'flex-end'}}>{item.itemdescription}</Text>
             </View>
             <View style = {styles.subView}>
             <Text >Current Stock -</Text>
             <Text >{item.currentstock}</Text>
             </View>
             <View style = {styles.subView}>
             <Text >Actual length -</Text>
             <Text >{item.actual_length_cm} cm</Text>
             </View>
             <View style = {styles.subView}>
             <Text>Actual height -</Text>
             <Text>{item.actual_height_cm} cm</Text>
             </View>
             <View style = {styles.subView}>
             <Text>Actual width -</Text>
             <Text>{item.actual_width_cm} cm</Text>
             </View>
           
             </View>
             </Card>
             </View>
            
          )
          }
      }
        />)

    }
    </View>
  )
  }


  
  export default Login;
  
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
      marginTop: '1.7%',
      margin : 3,
      aspectRatio : 2.5/1,
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

