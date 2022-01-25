import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

function AddTimerScreen({ navigation, route, ...props }) {
  return (
    <View style={styles.screen}>
      <Text>Add a new timer.</Text>
      <Button
        text="Save"
        onPress={() => props.addTimer()}
      />
      <Button
        text="Cancel"
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

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  addTimer: () => dispatch({ type: 'ADD_TIMER' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTimerScreen);
