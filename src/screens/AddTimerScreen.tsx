import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

function AddTimerScreen({ navigation, route, ...props }) {
  return (
    <View style={styles.screen}>
      <Text>Add a new timer.</Text>
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
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTimerScreen);
