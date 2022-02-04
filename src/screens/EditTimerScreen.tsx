import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import TimerForm from '../components/TimerForm';

function EditTimerScreen({ navigation, route, ...props }) {
  return (
    <View style={styles.screen}>
      <Text>Edit an existing timer.</Text>
      <TimerForm
        onSave={props.editTimer}
        onCancel={() => navigation.goBack()}
        onComplete={() => navigation.navigate('Home')}
        timer={props.timer}
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
  timer: state.timers.find((timer) => timer.id === ownProps.route.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  // editTimer: ({ ...props }) => console.log('Edit Timer:', props),
  editTimer: ({ timer, onComplete }) => dispatch((dispatch, getState) => {
    dispatch({ type: 'EDIT_TIMER', payload: { timer } });
    return onComplete();
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTimerScreen);
