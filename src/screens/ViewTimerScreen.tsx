import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTimers } from '../hooks/timers';

export default function ViewTimerScreen({ navigation, route }) {
  const { timer, deleteTimer } = useTimers(route.params.id);

  return (
    <View style={styles.screen}>
      <Text>View Timer screen.</Text>
      <Text>{timer.title}</Text>
      <Text>Running: {`${timer.running}`}</Text>
      <View>
        <View>
          <Text>Hours</Text>
          <Text>{Math.floor(Number(timer.seconds) / 3600)}</Text>
        </View>
        <View>
          <Text>Minutes</Text>
          <Text>{Math.floor(Number(timer.seconds) / 60) % 60}</Text>
        </View>
        <View>
          <Text>Seconds</Text>
          <Text>{Number(timer.seconds) % 60}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('EditTimer', { id: timer.id })}>
          <Text>Edit</Text>
        </Pressable>
        <Pressable onPress={() => {
          navigation.goBack();
          deleteTimer(timer.id);
        }}>
          <Text>Delete</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </Pressable>
      </View>
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
