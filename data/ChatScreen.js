import React , {useState} from "react";
import { ImageBackground,TouchableOpacity , StyleSheet, Text, View , TextInput } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faLaugh , faPaperclip, faCamera , faPaperPlane, faMicrophone } from '@fortawesome/free-solid-svg-icons'



export const ChatScreen = () => {
const [Message, setMessage] = useState('');
  return(
<View style={styles.containers}>
  <ImageBackground source={require('./image/d.png')} style={styles.image}/>
<View style={styles.container}>
<View style={styles.maincontainer}>
  <FontAwesomeIcon icon={faLaugh} style={styles.icon} size={24} color={'grey'}/>
  <TextInput
  style={styles.textinput}
  multiline
  placeholder={"Type a message"}
  value={Message}
  onChangeText={setMessage}
  />
  <FontAwesomeIcon icon={faPaperclip} style={styles.icon} size={24} color={'grey'} />
  {!Message && <FontAwesomeIcon icon={faCamera} size={24} style={styles.icon} color={'grey'}/> }
</View>
  <TouchableOpacity onPress={() => myFun}>
 <View style={styles.buttonContianer}>
  {!Message ?<FontAwesomeIcon icon={faMicrophone} color={'white'} size={24} /> :
  <FontAwesomeIcon  icon={faPaperPlane} size={24} color={'white'}/> }
</View>

    </TouchableOpacity>

</View>

  </View>
);
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },

  container: {
    flexDirection: 'row',
    margin:6 ,
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 0 ,

  },
  maincontainer:{
      flexDirection: 'row',
      backgroundColor: 'white',
      padding:1 ,
      borderRadius: 25,
      marginRight: 10 ,
      flex:1 ,
      alignItems: 'flex-end',
  },
  textinput:{
      fontSize: 16,
      flex:1,
  },
  icon:{
    margin: 10,
    marginRight: 10,
  },
  buttonContianer:{
      backgroundColor: '#075e54',
      borderRadius: 25,
      width: 50 ,
      height: 50 ,
      justifyContent: 'center',
      alignItems: 'center', 
  }
 
});

