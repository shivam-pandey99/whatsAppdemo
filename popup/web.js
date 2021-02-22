import React, { useRef, useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faSyncAlt, faCircle , faBolt ,  } from '@fortawesome/free-solid-svg-icons'

const Web = () =>  {
  let CameraRef = useRef(null);
  
    return (
      <View  style={{ flex: 1,
        flexDirection: 'column',}}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center' ,
            margin: 20 ,
          }}>
            <Text style={{
              fontSize: 16 ,
              fontWeight: '100' , 
               fontFamily : 'sans-serif', 
              fontStyle : 'italic'
            }}>
              To use WhatsApp Web, go to 
            </Text>
            <Text style={{
              fontSize: 17 ,
              fontWeight: 'normal' ,
              fontFamily : 'sans-serif', 
              fontStyle : 'italic'
            }}>
              Web whatsapp.com on your computer.
            </Text>
          </View>
        <RNCamera
          ref={CameraRef}
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center',}}
          type = {RNCamera.Constants.Type.back}
          autoFocus = {RNCamera.Constants.AutoFocus.on}
          flashMode = {RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
       />
     
      </View>
    );
}



export default Web; ;