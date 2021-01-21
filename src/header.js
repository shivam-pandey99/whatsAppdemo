import React, { Component } from 'react';
import { View,Text , StyleSheet, Modal,TouchableOpacity, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ModalScreens  from './modelScreen';
//import {useNavigation} from '@react-navigation/native'

//const navigation = useNavigation();


class Header extends Component {
  constructor() {
      super();
    }
    state = {
      modalVisible: false
    };
  
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }        
      
render (){
  const { modalVisible } = this.state;

return(
<View style={styles.container}>
<View>
  <Text style={styles.headertext}>WhatsApp</Text>
  <View style={styles.modalbtn}>

      <TouchableOpacity  onPress={() => {this.setModalVisible(true); }}>
      <Text style={styles.headertext}>I</Text>
      </TouchableOpacity>

<Modal  transparent={true} visible={modalVisible}  >

<TouchableOpacity  onPress={() => { this.setModalVisible(!modalVisible); }} style={{ flex: 1, margin:8, }}>
 <ModalScreens />
</TouchableOpacity>

</Modal>


  </View>
</View>
</View>

);}}

const styles = StyleSheet.create ( {
container: {
   backgroundColor: '#075e54',
},
headertext: {
   fontSize: 25,
   margin: 12,
   color: '#fff',
},
modalbtn: {
flexDirection: 'row',
alignSelf: 'flex-end',
margin: 1,
paddingRight: 10,
top: 0,
position: 'absolute'
}
})
export default Header ; 