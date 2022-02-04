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
            <Text>{JSON.stringify(item)}</Text>
            <Button
              text="View Timer"
              onPress={() => navigation.navigate('ViewTimer', {
                id: item.id,
              })}
            />
            <Button
              text="Edit Timer"
              onPress={() => navigation.navigate('EditTimer', {
                id: item.id,
              })}
            />
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
    padding: '16px',
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state, ownProps) => ({
  timers: state.timers,
});

const mapDispatchToProps = (dispatch) => ({
  removeTimer: (id) => dispatch({
    type: 'REMOVE_TIMER',
    payload: { id },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
