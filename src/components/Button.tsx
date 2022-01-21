import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function Button({ text, onPress }) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text
        style={styles.buttonText}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
  }
});
