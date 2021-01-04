import React,{ useState } from 'react';
import { Text, View,Modal,StyleSheet,TouchableOpacity,TouchableHighlight, TouchableWithoutFeedback,Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import { NewGroupScreen , Broadcast , Starred, Web, Payments,Settings ,Buttonfun } from './newgroup';
import Broadcastbtn from '../popup/broadcast'
import Modalbtns from '../popup/broadcast';

const Modalopn = ({ navigation }) => {
const [modalopen , setModalopen] = useState (false);



return(
<View>
  <View style={{flexDirection: 'row',alignSelf: 'flex-end',position: 'absolute',}}>
      <FontAwesomeIcon icon={ faSearch }size={18} style={{color: 'white', margin: 10,top:7,}}/>
    <TouchableOpacity onPress={() => setModalopen(true)} activeOpacity={'true'}>
      <FontAwesomeIcon icon={ faEllipsisV} size={18} style={{ color: 'white',margin:10, marginRight: 12,top:7}} />
    </TouchableOpacity>
  </View>
  <Modal  transparent={true} visible={modalopen} onRequestClose={()=>setModalopen(false)}>
    <TouchableOpacity onPress={() => setModalopen(false) } style={{ flex: 1, margin:8, }}>
      <TouchableWithoutFeedback>  
      <View style={{margin:5,height: 270, width:200,backgroundColor: 'white', position: 'absolute', alignSelf: 'flex-end',}}>
     
      </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  </Modal>
</View>

)}


const style= StyleSheet.create({
    Container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
    }
});
export default Modalopn ;