import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTimers } from '../hooks/timers';
import TimerForm from '../components/TimerForm';

export default function EditTimerScreen({ navigation, route }) {
  const { timer, editTimer } = useTimers(route.params.id);

  return (
    <View style={styles.screen}>
      <Text>Edit Timer screen.</Text>
      <TimerForm
        defaultValues={{
          title: timer.title,
          hh: `${Math.floor(Number(timer.seconds) / 3600)}`,
          mm: `${Math.floor(Number(timer.seconds) / 60) % 60}`,
          ss: `${Number(timer.seconds) % 60}`,
        }}
        onSubmit={(data) => {
          editTimer({
            ...timer,
            title: data.title,
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
