import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
