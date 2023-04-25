import  React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Background from './Bckgrnd';
import Button from './Button1';
import { orange } from './Constants';

const ScanBarcode = (props) => {
    return (
      <Background>
         <View style={styles.container1}>
         <Text style={{color:"#ff5757", fontSize:35, bottom:-35, fontWeight:'bold'}}>Scan Barcode</Text>
         </View>

         <View>
         <Text style={{top:150, fontSize:18.5, color:"#F2F2F2", marginLeft:35}}>Hold your device over a Barcode to scan it.</Text> 
         </View>

         <View style={styles.btn}>
         <Button bgColor={orange} textColor='#ff5757' btnLabel="Scan" Press={() => props.navigation.navigate("NutValue")} />
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
    btn: {
        bottom:-330,
        marginHorizontal:40,
    }
 })

  export default ScanBarcode;