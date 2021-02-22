import React, { useRef, useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faSyncAlt, faCircle , faBolt ,  } from '@fortawesome/free-solid-svg-icons'



const CameraScreen = () =>  {
    let CameraRef = useRef(null);
        const[camType, setCam] = useState(RNCamera.Constants.Type.front)
        const[flash, setflash] = useState(RNCamera.Constants.FlashMode.off)
      const takePicture = async () => {
        if (CameraRef) {
          const options = { quality: 0.5, base64: true };
          const data = await CameraRef.current.takePictureAsync(options);
          console.log(data.uri);
        }
      }
      const btnflash =() =>{
        if (flash===RNCamera.Constants.FlashMode.off){
          setflash(RNCamera.Constants.FlashMode.on)
        }else{
          setflash(RNCamera.Constants.FlashMode.off)
        }
      }

      const flipcamera =() => {
          if(camType===RNCamera.Constants.Type.front){
              setCam(RNCamera.Constants.Type.back)
          }else{
              setCam(RNCamera.Constants.Type.front)
          }
      }



    return (
      <View style={styles.container}>
        <RNCamera
          ref={CameraRef}
          style={styles.preview}
          type = {camType}
          autoFocus = { RNCamera.Constants.AutoFocus.on}
          flashMode = {flash}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
       >
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => btnflash()} style={styles.capture}>
                <FontAwesomeIcon icon={faBolt}   color={'white'} size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => takePicture()} style={styles.capture}>
                <FontAwesomeIcon icon={faCircle}   color={'white'} size={80}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => flipcamera()} style={styles.capture}>
                <FontAwesomeIcon icon={ faSyncAlt }  color={'white'} size={30}/>
              </TouchableOpacity>
            
          </View>
        </RNCamera>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 49,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 10,
  },
});
const App = () => {
    return(
        <Text>CameraScreen</Text>
    );
};

export default CameraScreen ;