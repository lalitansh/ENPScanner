import React from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';

const Profile=()=> {
return(
  <View style = {styles.Container}>
    <Text> Hello Lalitansh sharma</Text>
  </View>
)
}

export default Profile;

const styles = StyleSheet.create({
  Container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})