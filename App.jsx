import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'; 
import AddDestinations from './src/screens/AddDestinations'; 
import MapView from 'react-native-maps';
import MapViews from './src/screens/MapViews'
import DestinationDetails from './src/screens/DestinationDetails'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }} 
        />
        <Stack.Screen
          name="AddDestinations"
          component={AddDestinations} 
          options={{ title: 'Add Destination' }}
        />
        <Stack.Screen
        name='MapViews'
        component={MapViews}
        options={{ title: 'Map View' }}
        />
        <Stack.Screens
        name='DestinationDetails'
        component={DestinationDetails}
        options={{title:'Details'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
