import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuid from 'react-native-uuid';

import { useTimers } from '../hooks/timers';
import TimerForm from '../components/TimerForm';

export default function AddTimerScreen({ navigation, route }) {
  const { addTimer } = useTimers();

  return (
    <View style={styles.screen}>
      <Text>Add Timer screen.</Text>
      <TimerForm
        defaultValues={{
          title: '',
          hh: '',
          mm: '',
          ss: '',
        }}
        onSubmit={(data) => {
          addTimer({
            id: uuid.v1(),
            title: data.title,
            running: false,
            seconds: Number(data.hh) * 60 * 60 + Number(data.mm) * 60 + Number(data.ss),
          });
          navigation.navigate('Home');
        }}
        onBack={() => {
          navigation.goBack();
        }}
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
