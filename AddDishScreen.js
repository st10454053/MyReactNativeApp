import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddDishScreen = ({ route, navigation }) => {
  const { addDish } = route.params; 
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!name || !price || !description) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newDish = {
      name,
      price,
      description,
      // You can also add an image or other properties if needed
    };

    addDish(newDish); // Call the function to add the dish
    navigation.goBack(); // Navigate back after adding
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Add Dish" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddDishScreen;
