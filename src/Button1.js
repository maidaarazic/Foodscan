import React from 'react';
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Button({bgColor,btnLabel,textColor,Press,showIcon, icon}){
    return (
      <TouchableOpacity onPress={Press} style={{
        backgroundColor: bgColor,
        borderRadius: 25,
        alignItems: 'center',
        width: 300,
        height: 55,
        opacity: 0.8,  
        marginVertical: 15,
        justifyContent: 'center',
        top:20,
        marginLeft:20,
        }}> 
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showIcon && <MaterialCommunityIcons name={icon} color={textColor} size={30} style={{ marginRight: 20, top:20 }} />}
        <Text
          style={{
            color: textColor,
            top: 20,
            fontWeight: 'bold',
            fontSize: 28,
          }}
        >
          {btnLabel}
        </Text>
      </View>
          <View style={styles.circle} />
          

      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
  
    circle: {
        top:-17,
        width: 290,
        height: 40,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#db7093',
      },
    
  })
   