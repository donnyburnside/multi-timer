import * as React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { useTimers } from '../hooks/timers';

export default function HomeScreen({ navigation, route }) {
  const { timers, editTimer, deleteTimer } = useTimers();
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
            <Text>{JSON.stringify(item)}</Text>
            <Text>Seconds: {JSON.stringify(item.seconds)}</Text>
            {/* <Text>WTF: {JSON.stringify(Math.floor((Date.now() - item.timestamp)))}</Text> */}
            <Text>Date: {JSON.stringify(Date.now())}</Text>
            <Text>Timestamp: {JSON.stringify(item.timestamp)}</Text>
            <Text>WOT: {JSON.stringify(Math.floor((Date.now() - item.timestamp) / 1000))}</Text>
            <Text>Result: {JSON.stringify(item.seconds - Math.floor((Date.now() - item.timestamp) / 1000))}</Text>
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
            <Pressable onPress={() => {
              if (item.seconds) {
                return editTimer({
                  ...item,
                  running: !item.running ? true : false,
                  timestamp: !item.running ? Date.now() : 0,
                });
              }
            }}>
              <Text>{item.running ? 'Stop' : 'Start'}</Text>
            </Pressable>
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
