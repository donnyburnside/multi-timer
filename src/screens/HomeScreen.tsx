import * as React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { useTimers } from '../hooks/timers';

export default function HomeScreen({ navigation, route }) {
  const { timers, deleteTimer } = useTimers();
  return (
    <View style={styles.screen}>
      <Text>You have {timers.length} timers.</Text>
      <Pressable onPress={() => navigation.navigate('AddTimer')}>
        <Text>Add Timer</Text>
      </Pressable>
      <FlatList
        data={timers}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Running: {`${item.running}`}</Text>
            <View>
              <View>
                <Text>Hours</Text>
                <Text>{Math.floor(Number(item.seconds) / 3600)}</Text>
              </View>
              <View>
                <Text>Minutes</Text>
                <Text>{Math.floor(Number(item.seconds) / 60) % 60}</Text>
              </View>
              <View>
                <Text>Seconds</Text>
                <Text>{Number(item.seconds) % 60}</Text>
              </View>
            </View>
            <Pressable onPress={() => navigation.navigate('ViewTimer', { id: item.id })}>
              <Text>View</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('EditTimer', { id: item.id })}>
              <Text>Edit</Text>
            </Pressable>
            <Pressable onPress={() => deleteTimer(item.id)}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
