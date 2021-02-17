import React,{ useState } from 'react';
import { View , Modal , StyleSheet , Text,TouchableOpacity , TouchableWithoutFeedback} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native';

function closemoddal() {
   
}

const Modalopn = () => {
const [modalopen , setModalopen] = useState (false);
const navigation = useNavigation() ;

return(
<View>
  <View style={{flexDirection: 'row',alignSelf: 'flex-end',position: 'absolute',}}>
      <FontAwesomeIcon icon={ faSearch }size={18} style={{color: 'white', margin: 11,top:8,}}/>
    <TouchableOpacity onPress={() => setModalopen(true)} activeOpacity={'true'}>
      <FontAwesomeIcon icon={ faEllipsisV} size={18} style={{ color: 'white',margin:11, marginRight: 12,top:8}} />
    </TouchableOpacity>
  </View>
  <Modal  transparent={true} visible={modalopen} onRequestClose={()=>setModalopen(false)}>
    <TouchableOpacity onPress={() => setModalopen(false) } style={{ flex:1 , margin:4}}>  
    <View style={{margin:5,height: 320,borderRadius: 3 , width:230,backgroundColor: 'white', position: 'absolute', alignSelf: 'flex-end',}}>
<TouchableOpacity onPress={() =>{setModalopen(false) ; navigation.navigate('NewGroup')} }>
    <Text style={{ fontSize: 17 ,margin: 15 }}>New Group</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => {setModalopen(false) ; navigation.navigate('BroadCast')}}>
    <Text style={{ fontSize: 17 ,margin: 15 }}>New Broadcast</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => {setModalopen(false) ; navigation.navigate('Web')}}>
    <Text style={{ fontSize: 17 ,margin: 15 }}>WhatsApp Web</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() =>{setModalopen(false) ;  navigation.navigate('Starred')}}>
    <Text style={{ fontSize: 17 ,margin: 15 }}>starred</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() =>{setModalopen(false) ;  navigation.navigate('Payment')}}>
    <Text style={{ fontSize: 17 ,margin: 15 }}>Payments</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => {setModalopen(false) ; navigation.navigate('Settings')}}>
    <Text style={{ fontSize: 17 ,margin: 15 }}>Settings</Text>
</TouchableOpacity>
</View>
    </TouchableOpacity>
  </Modal>
</View>

)}



export default Modalopn ;