import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MyButton from '../components/MyButton';


const DestinationDetails = ({ route, navigation }) => {
  const { destination } = route.params; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={destination.imageUrl} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{destination.name}</Text>
        <Text style={styles.descriptions}>{destination.description}</Text>
        <View style={styles.coordinatesContainer}>
          <Text style={styles.coordinatesLabel}>Coordinates:</Text>
          <Text style={styles.coordinatesValue}>
            Latitude: {destination.coordinate.latitude.toFixed(4)}, Longitude: {destination.coordinate.longitude.toFixed(4)}
          </Text>
        </View>
        <Text style={styles.visited}>
          {destination.visited ? 'You have visited this place' : 'You have not visited this place yet'}
        </Text>
      </View>
      
      <MyButton 
       title={Home} 
        onPress={() => navigation.navigate('Home')}
      />
            </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  coordinatesContainer: {
    marginBottom: 20,
  },
  coordinatesLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  coordinatesValue: {
    fontSize: 16,
    color: '#333',
  },
  visited: {
    fontSize: 16,
    color: destination.visited ? 'green' : 'red',
    fontWeight: 'bold',
    marginTop: 20,
  },
  
});

export default DestinationDetails;
