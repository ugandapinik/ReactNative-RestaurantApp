import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen!</Text>
  
    </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },

  buttonStyle: {
    marginVertical: 20
  }
});

export default HomeScreen;
