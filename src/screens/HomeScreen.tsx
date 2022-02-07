import * as React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { useTimers } from '../hooks/timers';

export default function HomeScreen({ navigation, route }) {
  const { timers } = useTimers();

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
