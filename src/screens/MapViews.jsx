import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapViews = ({ route, navigation }) => {
  const { destinations } = route.params; 

  // Log destinations to the console
  console.log(destinations);

  if (!destinations) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No destinations found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <FlatList
          data={destinations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Marker
              coordinate={item.coordinate}
              pinColor={item.visited ? 'green' : 'red'}
              onPress={() => navigation.navigate('DestinationDetails', { destination: item })}
            >
              <View style={styles.marker}>
                <Text style={styles.markerText}>{item.name}</Text>
              </View>
            </Marker>
          )}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    fontWeight: 'bold',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },
});

export default MapViews;
