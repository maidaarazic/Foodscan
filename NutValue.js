import  React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Background from './Bckgrnd';

const NutValue = () => {
    return (
      <Background>
         <View style={styles.container1}>
         <Text style={{color:"#ff5757", fontSize:35, bottom:-35, fontWeight:'bold'}}>Nutritional value</Text>
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
    }
 })

  export default NutValue;