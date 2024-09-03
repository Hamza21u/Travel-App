import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MyTextInput from '../components/MyTextInput';

   function AddDestinations({ navigation })
   {

        const [name, setName] = useState('');
        const [description, setDescription] = useState('');

        const handleAddDestination = () => {
            if( name && description){
                const newDestination = {
                    id: (Math.random()*1000).toString(),  // generates a random id for the new destination place
                    name,
                    description
                }
                navigation.navigate('Home',{ newDestination })
            }
            else{
                console.log('Please Enter both Destination Name and Description.')
            }
        }
    
  return (
<>

<View style={styles.container}>
      <Text style={styles.label}>Destination Name</Text>
      <MyTextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter destination name"
      />

      <Text style={styles.label}>Description</Text>
      <MyTextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter destination description"
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleAddDestination}>
        <Text style={styles.buttonText}>Add destination</Text>
      </TouchableOpacity>
    </View>
</>
  );


   }



const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#DDD',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', 
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default AddDestinations