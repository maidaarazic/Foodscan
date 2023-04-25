import  React, { useState } from 'react';
import {Text,StyleSheet, View} from 'react-native';
import Background from './Bckgrnd';
import Button from './Button1';
import { orange } from './Constants';
import RadioForm, {RadioButton,RadioButtonInput,RadioButtonLabel}  from 'react-native-simple-radio-button';


export default function Category (props){

    const items = [
        {label: "Vegetarian", value: 0},
        {label: "Vegan", value: 1},
        {label: "None", value: 2},
    ]

    const [value, setChecked] = useState(0);
    
    return(
        <Background>
         <View style={styles.container1}>
            <Text style={{color:"#ff5757", fontSize:35, bottom:-35, fontWeight:'bold'}}>Category</Text>
         </View>

         <View>
          <Text style={{top:270,marginLeft:20, fontSize:18, color:"#F2F2F2"}}>Select the category...</Text>
           <RadioForm style={{bottom:-350}}>
           
            {
                items.map((obj, index) => (
                  <RadioButton style={styles.circle}>
  
                    <RadioButtonInput obj={obj} index={index} isSelected={index === value} onPress={(value) => setChecked(value)}
                       buttonInnerColor="#C0846F" buttonOuterColor="#F4B8B3"
                       borderWidth={7}
                       buttonSize={23}
                       buttonWrapStyle={{marginLeft:20, justifyContent:'center' }} />

                    <RadioButtonLabel obj={obj} index={index} 
                    labelStyle={{color : index ===value ? "#C0846F" : "#000000" ,fontSize: 18, marginLeft:25}}  />
                 
                  </RadioButton>
                ))
              
            }
            
           </RadioForm>
         </View>
    
         <View style={styles.btn}>
           <Button textColor='#ff5757' bgColor={orange} btnLabel="Submit" Press={() => props.navigation.navigate("Welcome")}/>
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
        alignItems:'center',
        marginRight: 20,
        bottom:-390,
       },
       circle: {
        top:-30,
        width: 290,
        height: 50,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: orange,
        backgroundColor: orange,
        marginBottom:30,
        marginLeft:65,
        opacity:0.85,
     
      }
  
})

