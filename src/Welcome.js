import  React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import Background from './Bckgrnd';
import Button from './Button1';



const Welcome = (props) => {
    return (
      <Background>
         <View style={styles.container1}>
         <Image source={require('./assets/welcome.png')} style={styles.word}/> 
         <Text style={{top:210, fontSize:20, color:"#F2F2F2", alignItems: 'center'}}>
         Click to scan the barcode of the product...</Text> 
         </View>
         
         <View style={styles.btn}>
         
         <Button
        bgColor="#f8dead"
        btnLabel="Scan Barcode"
        textColor="#ff5757"
        Press={() => props.navigation.navigate("ScanBarcode")}
        showIcon={true}
        icon="barcode-scan"
      />
         </View>
      </Background>
    );
  
  }
 
  const styles = StyleSheet.create({
    container1: {
     borderBottomEndRadius:30,
     borderBottomStartRadius:30,
     backgroundColor:'#f8dead',
     width:420,
     height:80,
     alignItems:'center',
    },
    word: {
        alignItems: 'center',
        width: 330,
        height:230,
        resizeMode: 'stretch',
        top:150,
      },
    btn: {
        bottom:-480,
        marginHorizontal:40,
       }
 })
 
  export default Welcome;
  