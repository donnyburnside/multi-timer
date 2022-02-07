import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddTimerScreen({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Text>Add Timer screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: '16px',
    backgroundColor: '#fff',
  },
});
