import React from "react";
import {View , Image, TouchableOpacity ,Text } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faQrcode , faKey , faCommentAlt , faCircleNotch, faQuestionCircle, faBell , faUserFriends} from '@fortawesome/free-solid-svg-icons'

import {useNavigation } from '@react-navigation/native'


export const Setting = ( { navigation })  => {
  return (
    <View style={{ flex: 1}}>
      <View style={{flexDirection: 'row',  borderBottomColor : 'grey' , borderBottomWidth : 0.5 ,}}>
      <Image source={require('../data/image/DSCN8403.png')} 
      style={{width: 80, height: 80 , borderRadius: 250 , margin:15 , top : 1 ,}}/>
      <View>
      <Text style={ {fontSize : 20 , top : 30 , left : 1 ,} }> Shivam Pandey</Text>
       <Text style={{ fontSize : 15 ,top : 30 ,left : 9 ,  }}>
       Hey! there i am using whatsapp.</Text>
      </View>
      
      <FontAwesomeIcon icon={faQrcode}  style={{ top : 35   ,margin: 10 , right: 0 , alignSelf: 'flex-end' , position: 'absolute' }} size={21} color={'grey'}/>
      </View>
  <View style={{flexDirection: 'row',marginHorizontal: 25,}} >
<View style={{margin: 15 ,marginHorizontal: 10 , top : 9 , left : 1 , }}>
<FontAwesomeIcon icon={faKey} size={29} color={'#00994d'} />
</View>
<View style={{margin: 10 , top :10 ,}}>
  <Text style={{fontSize : 19 ,left: 10 ,}}>
    Accounts
  </Text>
  <Text style={{fontSize : 14 ,left: 10 ,}}>
    Primary,Security,Change Number
  </Text>
</View>
</View>

<View style={{flexDirection: 'row' ,marginHorizontal: 25, top:8 , }} >
<View style={{margin: 15 , top : 9 , left : 1, }}>
<FontAwesomeIcon icon={faCommentAlt} size={25} color={'#00994d'} />
</View>
<View style={{margin: 10 , top :10 ,}}>
  <Text style={{fontSize : 19 , left: 10 ,}}>
    Chats
  </Text>
  <Text style={{fontSize : 14 ,left: 10 ,}}>
   Theme,wallppaers,chat history
  </Text>
</View>
</View>


<View style={{flexDirection: 'row' ,marginHorizontal: 25, top: 8 , }} >
<View style={{margin: 15 , top : 9 , left : 1 , }}>
<FontAwesomeIcon icon={faBell} size={26} color={'#00994d'} />
</View>
<View style={{margin: 10 , top :10 ,}}>
  <Text style={{fontSize : 19 , left: 10 ,}}>
    Notification
  </Text>
  <Text style={{fontSize : 14 ,left: 10 ,}}>
   Message,groups & call tones 
  </Text>
</View>
</View>



<View style={{flexDirection: 'row' ,marginHorizontal: 25, top: 8 , }} >
<View style={{margin: 15 , top : 9 , left : 1 , }}>
<FontAwesomeIcon icon={faCircleNotch} size={26} color={'#00994d'} />
</View>
<View style={{margin: 10 , top :10 ,}}>
  <Text style={{fontSize : 19 , left: 10 ,}}>
    Storage and Data usage
  </Text>
  <Text style={{fontSize : 14 ,left: 10 ,}}>
   Network usage,auto-downlaod
  </Text>
</View>
</View>


<View style={{flexDirection: 'row' ,marginHorizontal: 25 ,  top: 8 , marginBottom: 10 , height : 85 ,  width : 700 , }} >
<View style={{margin: 15 , top : 9 , left : 1 , }}>
<FontAwesomeIcon icon={faQuestionCircle} size={29} color={'#00994d'} />
</View>
<View style={{margin: 10 , top :10  , flex: 1 ,borderBottomColor: 'grey' , borderBottomWidth : 0.8 , borderBottomStartRadius : 10 , }}>
  <Text style={{fontSize : 19 , left: 10 ,}}>
    Chats
  </Text>
  <Text style={{fontSize : 14 ,left: 10 ,}}>
   FAQ,Contact us,privacy policy
  </Text>
</View>
</View>

<View>
<View style={{flexDirection: 'row' ,marginHorizontal: 25 ,  top: 8 , marginBottom: 10 , height : 85 ,  width : 700 , }} >
<View style={{margin: 15 , top : 1 , left : 1 , }}>
<FontAwesomeIcon icon={faUserFriends} size={29} color={'#00994d'} />
</View>
<View style={{margin: 10 , top : 3 , flex: 1 }}>
  <Text style={{fontSize : 19 , left: 10 ,}}>
    Invite a friend
  </Text>
  
</View>
</View>
</View>

 <View style={{justifyContent: 'center' , alignItems : 'center'}}>
   <Text>
     from 
   </Text>
<Text style={{ fontSize : 16 , letterSpacing: 4 , fontWeight: 'bold'}}> FACEBOOK</Text>
 </View>


    </View>
  );
}


