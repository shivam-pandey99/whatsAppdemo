import React from 'react';
import { View ,TouchableOpacity,StyleSheet,Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'


const ModalScreens  = () =>  {
const navigation = useNavigation();


return (
<View style={styles.container}>
   <View style={styles.btn}>
     <TouchableOpacity onPress={() => navigation.navigate('NewGroupScreen')}>
      <Text  style={styles.button}>New Group</Text>
    </TouchableOpacity>
    </View>  
    <View style={styles.btn}>
    <Pressable style={styles.h} onPress={() => navigation.navigate('New BroadCast')}>
      <Text style={styles.button} >New BroadCast</Text>
   </Pressable>
    </View>
   


     </View> 
    );
  }
const styles = StyleSheet.create({

container:{
  margin:5,
  height: 270, 
  width:200,
  backgroundColor: 'white', 
  position: 'absolute', 
  alignSelf: 'flex-end',
},

btn:{
  height:5,
  padding: 15,
},
button:{
  fontSize: 20,

}



}
)

  export default ModalScreens ;
