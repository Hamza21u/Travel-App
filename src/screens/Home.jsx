import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import DestinationCard from '../components/DestinationCard';


function Home({ navigation, route }) {
  let [destinations, setDestinations] = useState([
    {
      name: 'Hunza',
      description: 'This is a very good place.',
      imageUrl: require('../tempImages/Hunza.jpg'),
      coordinate: { latitude: 36.3184, longitude: 74.6514 },
      visited: false,
    },
    {
      name: 'Skardu',
      description:
        'Skardu is a mountain town in the Gilgit-Baltistan region of Pakistan. It is the capital of the Baltistan region in the Karakoram mountain range, at an altitude of approximately 2,438 meters (7,999 feet) above sea level. Skardu is known for its scenic beauty and is a popular tourist destination, particularly for mountaineers and trekkers to explore the Karakoram mountains, glaciers, and lakes.',
      imageUrl: require('../tempImages/Sakardu.jpg'),
      coordinate: { latitude: 35.2986, longitude: 75.6333 },
      visited: false,
    },
    {
      name: 'Muree',
      description:
        'This Pakistan’s most popular hill station is Murree which lies 50 kilometers northeast of Pakistani capital Islamabad. It is a mountainous area, forming part of outer Himalayas and it is located at a comfortable altitude of 7500 feet (2286 meters) in the Himalayan foothills at 33 54′ 30″ north latitude and 73 26 east longitude.',
      imageUrl: require('../tempImages/Muree.jpg'),
      coordinate: { latitude: 33.9069, longitude: 73.3915 },
      visited: false,
    },
    {
      name: 'Gilgit',
      description:
        'Gilgit-Baltistan (GB) is a very sparsely populated high-mountain area in the north of Pakistan. Its natural environment is usually described with superlatives – the longest glaciers outside of the polar region, home of the world’s second highest peak (K2) and four more eight-thousanders. GB is largely a high-mountain desert; geologically, it spreads over three high mountain systems: Himalaya, Karakorum and Hindukush.',
      imageUrl: require('../tempImages/Gilgit.jpg'),
      coordinate: { latitude: 35.9208, longitude: 74.3088 },
      visited: true,
    },
  ]);

  useEffect(() => {
    if (route.params?.newDestination) {
      setDestinations((prevDestinations) => [
        ...prevDestinations,
        route.params.newDestination,
      ]);
    }
  }, [route.params?.newDestination]);

  return (
    <View style={MyStyle.container}>
      <FlatList
        data={destinations}
        renderItem={({ item }) => (
          <DestinationCard
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            onPress={()=>navigation.navigate('DestinationDetails')}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={MyStyle.buttonContainer}>
        <TouchableOpacity
          style={MyStyle.mybutton}
          onPress={() => navigation.navigate('AddDestinations')}
        >
          <Text style={MyStyle.buttonText}>Add destination</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={MyStyle.mybutton} 
        onPress={
            () => navigation.navigate('MapViews',{ destinations })
        }
        >
          <Text style={MyStyle.buttonText}>View on Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MyStyle = StyleSheet.create({
  container: {
    flex: 0,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  mybutton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
