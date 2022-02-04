import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

function EditTimerScreen({ navigation, route, ...props }) {
  return (
    <View style={styles.screen}>
      <Text>Edit an existing timer.</Text>
      <Text>{JSON.stringify(props.timer)}</Text>
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
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTimerScreen);
