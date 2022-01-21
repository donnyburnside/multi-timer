import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

export default function NotFoundScreen({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Text>Not Found</Text>
      <Button
        text="Go back"
        onPress={() => navigation.goBack()}
      />
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
