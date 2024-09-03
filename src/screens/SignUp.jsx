import { View, Text,StyleSheet,Alert } from 'react-native'
import React,{useState} from 'react'
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'

 function SignUp() {
    let[email,setEmail]=useState('')
    let[pasword,setpasword]=useState('')
    let[confirmPasword,setConfirmPasword]=useState('')

    function handleSignUP(){

      Alert.alert('aplly signup logic here')
        }
        function clear(){
          setEmail('');
          setpasword('');
          setConfirmPasword('');
        }

  return (
    
    <View>
          <Text style={styles.myInput}>sign-UP</Text>

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
     <MyTextInput
     placeholder='confirm your pasword'
     value={confirmPasword}
     onChangeText={setConfirmPasword}
     secureTextEntry={true}
     />
     <MyButton 
     title='click'onPress={handleSignUP}
     />
     <MyButton 
     title='Cancel'onPress={clear}
     />
    </View>
  );
}
const styles=StyleSheet.create({
  myInput:{
    padding: 20,

    fontSize: 25,
    fontWeight: 'bold',
    color:'yellow',
    backgroundColor: 'green',
    textShadowColor: '#c27070', // Color of the shadow
    textAlign:'centre'



  }
})

export default SignUp
