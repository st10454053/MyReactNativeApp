import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Circadian logo.png')} style={styles.logo} resizeMode="cover" />
      <View style={styles.buttonContainer}>
        <Button title="Go to Menu" onPress={() => navigation.navigate('Menu')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Ensures the image covers the screen
  },
  buttonContainer: {
    position: 'absolute', // Position the button container
    bottom: 20, // Distance from the bottom of the screen
    left: '50%',
    transform: [{ translateX: -50 }], // Center the button horizontally
  },
});

export default HomeScreen;



