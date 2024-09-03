
import { StyleSheet, TextInput, View, } from 'react-native'
import React from 'react'

export default function MyTextInput({ placeholder,value,onChangeText,secureTextEntry }) {
  return (
    <View>
      <TextInput
    style={styles.myInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}

      />
    </View>
  );
}
const styles=StyleSheet.create({
    myInput:{
width:300,
height:40,
borderColor:'green',
borderWidth:1,
marginTop:10,
marginLeft:20
    }
})