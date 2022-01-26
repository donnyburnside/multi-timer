import * as React from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

function HomeScreen({ navigation, route, ...props }) {
  return (
    <View style={styles.screen}>
      <Text>You have {props.timers.length} timers.</Text>
      <Button
        text="Add Timer"
        onPress={() => navigation.navigate('AddTimer')}
      />
      <FlatList
        data={props.timers}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Button
              text="Remove Timer"
              onPress={() => props.removeTimer(item.id)}
            />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  timers: state.timers
});

const mapDispatchToProps = (dispatch) => ({
  removeTimer: (id) => dispatch({
    type: 'REMOVE_TIMER',
    payload: { id },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
