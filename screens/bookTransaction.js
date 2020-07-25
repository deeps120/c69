import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permission from 'expo-permissions';

export default class BookTransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermission=async()=>{
        const {status} = await Permission.askAsync (Permissions.CAMERA);
        this.setState({
            hasCameraPermission:status==='granted'
        })
    }
    handleBarCodeScanned=async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'
        })
    }
    render(){
        const hasCameraPermission=this.state.hasCameraPermission;
const scanned=this.state.scanned;
const buttonState=this.state.buttonState;
if(buttonState==='clicked' && hasCameraPermission){
    return(
        <BarCodeScanner
        onBarCodeScanned={scanned  ? undefined:this.handleBarCodeScanned}
style={StyleSheet.absoluteFillObject}
        />
    )
}
else if(buttonState==='normal')
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.ButtonText}>
                    hasCameraPermission===true? this.state.scannedData :'requestCameraPermission'
                </Text>
                <TouchableOpacity style={styles.scanButton}
                onPress={this.getCameraPermission}
                >
                    <Text style={styles.ButtonText}>scan QR Code</Text>
                </TouchableOpacity>
            </View>
        )
   }
}
const styles=StyleSheet.create({
    scanButton:{
backgroundColor:'black',
paddig:10,
margin:10
    },
ButtonText:{
    fontSize:15,
    color:'white',

}
})