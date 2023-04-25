import  React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Background from './Bckgrnd';
import Button from './Button1';
import { orange } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 120 }}>
       <Image source={require('./assets/logo.png')} style={styles.logo}/>
       <Button bgColor={orange} textColor='#ff5757' btnLabel="Sign Up" Press={() => props.navigation.navigate("SignUp")}  />
       <Button bgColor={orange} textColor='#ff5757' btnLabel="Log In" Press={() => props.navigation.navigate("LogIn")}   />
       </View>
    </Background>
  );

}
const styles = StyleSheet.create({
  
  logo: {
    alignItems: 'center',
    width: 330,
    height:360,
    resizeMode: 'stretch',
  },
})

export default Home;
