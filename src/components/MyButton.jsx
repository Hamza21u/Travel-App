import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

 function MyButton({ title,onPress }) {
  return (
    <View>
    <TouchableOpacity  onPress={onPress}>
    <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>  
    </View>
  )
}

export default MyButton
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4CAF50', // Green background color
      paddingVertical: 12, // Vertical padding
      paddingHorizontal: 25, // Horizontal padding
      borderRadius: 8, // Rounded corners
      alignItems: 'center', // Center the text horizontally
      justifyContent: 'center', // Center the text vertically
      margin: 10, // Margin around the button
      shadowColor: '#000', // Black shadow color
      shadowOffset: { width: 2, height: 2 }, // Offset for the shadow
      shadowOpacity: 0.3, // Opacity of the shadow
      shadowRadius: 3, // Radius for the shadow blur
      elevation: 5, // Android-specific shadow property
      fontWeight: 'bold',
      fontSize:30,
      color: '#fff', // White text color
      fontSize: 16, // Font size
      fontWeight: '600', // Semi-bold text
      textTransform: 'uppercase', // Uppercase text
    }})