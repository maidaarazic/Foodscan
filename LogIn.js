import  React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import Background from './Bckgrnd';
import Button from './Button1';
import { orange, red } from './Constants';
import Form from './Form';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const LogIn = (props) => {
  return (
    <Background>
   
     <View style={styles.container1}>
       <Text style={{color:"#ff5757", fontSize:35, bottom:-35, fontWeight:'bold'}}>Log In</Text>
     </View>
     <View style={{alignItems:'center', top:150,}}>
     <FontAwesome name='user-circle' style={{color: '#ff5757', fontSize:120,}}/>
     </View>
     <View style={{top:-70,}}>
        <Form placeholder="Email / Username" keyboardType={'email-address'}/>
        <Form placeholder="Password" secureTextEntry={true}/>
     </View>
     <View style={{alignItems: 'center', paddingRight: 20, bottom:-240,}}>
        <Text style={{textDecorationLine: 'underline',color: red, fontWeight: 'bold', fontSize: 16}}>Forgot password?</Text>
     </View>
     <View style={styles.btn}>
       <Button textColor='#ff5757' bgColor={orange} btnLabel="Log In" Press={() => props.navigation.navigate("Category")}/>
     </View>
    <View style={{  flexDirection :'row', justifyContent: "center" ,bottom:-345,}}>
        <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
         <Text style={{ color: red, fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
        </TouchableOpacity>
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

export default LogIn;