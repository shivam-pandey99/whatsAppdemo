import React from "react";
import {View,Text,Image, TouchableOpacity } from "react-native"; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import {useNavigation} from '@react-navigation/native'

function ChatList(props) {
const navigation = useNavigation();
return(
<View style={{flexDirection: 'row' ,}}>
    <Image source={props.ImageUri} 
    style={{width: 80 , height: 80 , borderRadius: 120 , margin:10 ,}}></Image>
    <View style={{flexDirection: 'row', height: 90, borderBottomWidth: 0.5 , borderBottomColor: 'grey'}}>
    <TouchableOpacity onPress={ () => navigation.navigate('Shivam Pandey' , {name: props.name})}  >
    <View style={{marginTop: 20,}}>
        <Text style={{fontSize: 19,  }}>{props.name}</Text>
        <View style={{flexDirection: 'row' , margin : 5 ,}}>
        <Text style={{fontSize: 16 ,fontWeight: 'normal' }}>
            {props.lastMessage}
        </Text>
    </View>
    </View>
    </TouchableOpacity>
    <View style={{margin : 20, marginRight: 1 , position: 'relative'}}>
    <Text style={{fontSize: 13 }}>{props.createdAt}</Text>
    </View>
    </View>
</View> 

    )
}
tab3 = ({navigation}) => {
return(
<View>

<ChatList
 lastMessage = 'Well done this sprint, guys!'
  createdAt= 'yesterday'
  name= 'shivam'
  ImageUri={require('../data/image/DSCN8403.png')}
  />
  
  <ChatList
 lastMessage = 'Well done this sprint, guys!'
  createdAt= 'yesterday'
  name= 'Satyam'
  ImageUri={require('../data/image/s.png')}
  />
    <ChatList
  lastMessage = 'Well done this sprint, guys!'
   createdAt= 'yesterday'
   name= 'Elon Musk'
   ImageUri={require('../data/image/download.png')}
   />  
   <ChatList
   lastMessage = 'Well done this sprint, guys!'
    createdAt= 'yesterday'
    name= 'Muskesh Ambani'
    ImageUri={require('../data/image/d.png')}
    />
      <ChatList
 lastMessage = 'Well done this sprint, guys!'
  createdAt= 'yesterday'
  name= 'Bill gates'
  ImageUri={require('../data/image/download.png')}
  /> 
   <ChatList
  lastMessage = 'Well done this sprint, guys!'
   createdAt= 'yesterday'
   name= 'Mark Zuckerburg'
   ImageUri={require('../data/image/DSCN8403.png')}
   />

  <View style={{
    backgroundColor: '#075e54',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'flex-end' ,
    bottom: 30 ,
    right: 30 ,

  }}> 
  <TouchableOpacity onPress={() => navigation.navigate('Contacts') }>
  <FontAwesomeIcon 
  icon={faCommentAlt}  
  size={24}
  color={'white'}
/> 
  </TouchableOpacity>

  </View>

</View>



)}
export default tab3;