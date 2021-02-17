import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View ,Text , StyleSheet,Button ,TouchableOpacity } from 'react-native'

const Buttons = () => {
    const navigation = useNavigation() ;
return (
<View> 
<TouchableOpacity onPress={() => navigation.navigate('NewGroup')}>
    <Text style={styles.hello}>New Group</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('BroadCast')}>
    <Text style={styles.hello}>New Broadcast</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Web')}>
    <Text style={styles.hello}>WhatsApp Web</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Starred')}>
    <Text style={styles.hello}>starred</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Payment')}>
    <Text style={styles.hello}>Payments</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <Text style={styles.hello}>Settings</Text>
</TouchableOpacity>
</View>
    
);
}
const styles = StyleSheet.create({
    hello:{
        fontSize: 15 ,
        margin: 16 ,
    },
})


export default Buttons ;