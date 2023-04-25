import  React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import Background from './Bckgrnd';
import Button from './Button1';
import { orange, red } from './Constants';
import Form from './Form';


const SignUp = (props) => {
  return (
    <Background>
     <View style={styles.container1}>
     <Text style={{color:"#ff5757", fontSize:35, bottom:-35, fontWeight:'bold'}}>Sign Up</Text>
     </View>
     <View style={{ marginHorizontal: 110, marginVertical: 40 }}>
     <Image source={require('./assets/logo.png')} style={styles.logo}/>
     </View>
     <View style={{top:-350}}>
        <Form placeholder="Username" />
        <Form placeholder="Address" />
        <Form placeholder="Email" keyboardType={'email-address'}/>
        <Form placeholder="Password" secureTextEntry={true}/> 
     </View>
     <View style={styles.btn}>
       <Button textColor='#ff5757' bgColor={orange} btnLabel="Create my account" Press={() => props.navigation.navigate("Category")}/>
     </View>
     <View style={{  flexDirection :'row', justifyContent: "center", top:15}}>
        <Text style={{ fontSize: 16, fontWeight:"bold" }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("LogIn")}>
         <Text style={{ color:red, fontWeight: 'bold', fontSize: 16 }}>Log In</Text>
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
    logo: {
        alignItems: 'center',
        width: 180,
        height:200,
      }, 
    btn: {
        alignItems:'center',
        marginRight: 20,
        
       
       } 
})

export default SignUp;
