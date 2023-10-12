// Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen 2</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
