import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Text>Not Found</Text>
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
