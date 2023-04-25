import  React from 'react';
import {TextInput,StyleSheet} from 'react-native';
import { lightred, red } from './Constants';



const Form = (props) => {
  return (
    <TextInput {...props}
    style={{
    borderRadius: 20, 
    color: 'black', 
    paddingHorizontal: 10, 
    width: 340, height:60, 
    backgroundColor: '#f8dead', 
    marginVertical: 15, 
    marginHorizontal:'9%',
    opacity:0.85,
    bottom:-300}}
    placeholderTextColor={lightred}>
    </TextInput>
  );

}
const styles = StyleSheet.create({
  })

export default Form;
