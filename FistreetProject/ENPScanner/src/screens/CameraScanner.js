import React, {Component} from 'react';
 import {
 Text,
 View,
 StyleSheet,
 Alert,
 TouchableOpacity,
 Image,
 Dimensions,
 Modal
}from 'react-native';

import {RNCamera as Camera} from 'react-native-camera';
import Colors from '../utils/Colors';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
export default class BarCodeScanner extends Component {


  constructor(props) {
  super(props);
  this.item = {}
  this.handleTourch = this.handleTourch.bind(this);
  this.state = {
  torchOn: false,
  captured : false,
  Items : []
 }
 }


 onBarCodeRead = (e) => {
  
  this.setState({captured : true})
  this.item = e
  
  
}

handleTourch(value) {
  if (value === true) {
      this.setState({ torchOn: false });
  } else {
      this.setState({ torchOn: true });
  }
}

onCancelItem = () => {
  
  this.setState({captured : false})

}


onAddItem = () => {
  this.item.id = Math.random()
  this.setState({Items : [...this.state.Items , this.item]})
  this.props.route.params.receivedItemList(this.item)
  console.log('added Item', this.state.Items )
  this.setState({captured : false})
}

 render() {
  return (
  
<>
   <Modal style = {{flex:1}}
   
   animationType="none"
   transparent={true}
   visible={this.state.captured}
   >
        <View style = {{width : WIDTH,
        justifyContent : 'center',
        alignItems: 'center',
        marginTop : 200
        }}>


    <View style = {styles.itemViewStyle}>
    <Text style = {styles.itemTextStyle}>Product - {this.item.data}</Text>
    </View>
    <View style = {styles.itemViewStyle}>
    <Text style = {styles.itemTextStyle}>Type - {this.item.type}</Text>
    </View>
    <View style = {styles.AddToList}>
    <TouchableOpacity
    onPress = {()=>this.onCancelItem()}
    >
      <Text style = {styles.customButtons}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress = {()=>this.onAddItem()}
    >
      <Text style = {styles.customButtons}>Add</Text>
    </TouchableOpacity>
    </View>
    </View>
 </Modal>
 

  
<View style={styles.container}> 
  <Camera
  style={styles.preview}
  torchMode={this.state.torchOn ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off}
  onBarCodeRead={this.onBarCodeRead}
  ref={cam => this.camera = cam}
  //aspect={Camera.Constants.Aspect.fill}
  >
  <Text style={{
  backgroundColor: 'white'
  }}>BARCODE SCANNER</Text>
  </Camera>
  <View style={styles.bottomOverlay}>
  <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
  <Image style={styles.cameraIcon}
  source={this.state.torchOn === true ? require('../../Assets/Images/icons8-flash-light-64.png') : require('../../Assets/Images/icons8-flash-light-64.png')} />
  </TouchableOpacity>
  </View>
 
  </View>

  </>
  )
 }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
cameraIcon: {
        margin: 5,
        height: 40,
        width: 40
    },
 bottomOverlay: {
        position: "absolute",
        width: "100%",
        flex: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemViewStyle : {
      width : '70%',
      backgroundColor : Colors.APP_GRAY,
      height : 50,
      justifyContent : 'center',
      elevation : 5
    },
    itemTextStyle : {
      fontSize: 15,
      fontWeight : '300'
    },
    AddToList : {
      width : '70%',
      height : 60,
      backgroundColor : Colors.red600,
      flexDirection : 'row',
      justifyContent : 'space-around',
      alignItems:'center'
    },
    customButtons : {
      color : Colors.white, 
      fontSize : 16, 
      fontWeight : '600'
    }
 })

