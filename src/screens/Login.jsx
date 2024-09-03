
import { View, Text,StyleSheet,Alert } from 'react-native'
import React,{useState} from 'react'
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'


 function Login() {
    let[email,setEmail]=useState('')
    let[pasword,setpasword]=useState('')
    function clickMe(){
Alert.alert('apply login logic here')
    }
    function clear(){
      setEmail('');
      setpasword('');
    
    }

  return (
    <View>
          <Text style={styles.myInput}>Login</Text>

     <MyTextInput
     placeholder='enter your email'
     value={email}
     onChangeText={setEmail}
     
     />
     <MyTextInput
     placeholder='enter the pasword'
     value={pasword}
     onChangeText={setpasword}
     secureTextEntry={true}
     />
     <MyButton title='login'onPress={clickMe}/>
     <MyButton title='Cancel'onPress={clear}/>
    
    </View>
  );
}
const styles=StyleSheet.create({
  myInput:{
    padding: 20,

    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    color:'black',
    backgroundColor: '#fcba03',
    textShadowColor: '#c27070', // Color of the shadow
    textAlign:'centre'



  }
})

export default Login