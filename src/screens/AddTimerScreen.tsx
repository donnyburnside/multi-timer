import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import TimerForm from '../components/TimerForm';

function AddTimerScreen({ navigation, route, ...props }) {
  return (
    <View style={styles.screen}>
      <Text>Add a new timer.</Text>
      <TimerForm
        onSave={props.addTimer}
        onCancel={() => navigation.goBack()}
        onComplete={() => navigation.navigate('Home')}
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

const mapStateToProps = (state, ownProps) => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  addTimer: ({ timer, onComplete }) => dispatch((dispatch, getState) => {
    dispatch({ type: 'ADD_TIMER', payload: { timer } });
    return onComplete();
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTimerScreen);
