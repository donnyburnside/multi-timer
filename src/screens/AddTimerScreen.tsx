import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import Button from '../components/Button';

const convertDurationToSeconds = ({ hh, mm, ss }) => Number(hh) * 60 * 60 + Number(mm) * 60 + Number(ss);

function AddTimerScreen({ navigation, route, ...props }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      hh: '',
      mm: '',
      ss: '',
    }
  });
  const onSubmit = (data) => {
    const timer = {
      id: Math.random(),
      title: data.title,
      seconds: convertDurationToSeconds({
        hh: data.hh,
        mm: data.mm,
        ss: data.ss,
      }),
      running: false,
    };

    props.addTimer({
      timer,
      onComplete: () => navigation.navigate('Home'),
    });
  };
  const onCancel = () => navigation.goBack();

  return (
    <View style={styles.screen}>
      <Text>Add a new timer.</Text>
      <View style={styles.form}>
        <View style={styles.formBlock}>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 3,
              maxLength: 12,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={styles.formLabel}>Title</Text>
                <TextInput
                  style={styles.formInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="My timer"
                />
              </>
            )}
            name="title"
          />
          {errors.title && (
            <Text style={styles.formError}>
              {errors.title?.type === 'required' && 'Title is required'}
              {errors.title?.type === 'minLength' && 'Title must be at least 3 characters.'}
              {errors.title?.type === 'maxLength' && 'Title must be at most 12 characters.'}
            </Text>
          )}
        </View>
        <View style={styles.formBlock}>
          <View style={styles.formRow}>
            <View style={styles.formColumn}>
              <Controller
                control={control}
                rules={{
                  required: true,
                  min: 0,
                  max: 24,
                  maxLength: 2,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Please enter a number',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text style={styles.formLabel}>Hours</Text>
                    <TextInput
                      style={styles.formInput}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="00"
                    />
                  </>
                )}
                name="hh"
              />
              {errors.hh && (
                <Text style={styles.formError}>
                  {errors.hh?.type === 'required' && 'Hours is required'}
                  {errors.hh?.type === 'min' && 'Hours must be at least 0.'}
                  {errors.hh?.type === 'max' && 'Hours must be at most 24.'}
                  {errors.hh?.type === 'maxLength' && 'Hours must be at most 2 characters.'}
                  {errors.hh?.type === 'pattern' && 'Hours must be a number.'}
                </Text>
              )}
            </View>
            <View style={styles.formColumn}>
              <Controller
                control={control}
                rules={{
                  required: true,
                  min: 0,
                  max: 59,
                  maxLength: 2,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Please enter a number',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text style={styles.formLabel}>Minutes</Text>
                    <TextInput
                      style={styles.formInput}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="00"
                    />
                  </>
                )}
                name="mm"
              />
              {errors.mm && (
                <Text style={styles.formError}>
                  {errors.mm?.type === 'required' && 'Minutes is required'}
                  {errors.mm?.type === 'min' && 'Minutes must be at least 0.'}
                  {errors.mm?.type === 'max' && 'Minutes must be at most 59.'}
                  {errors.mm?.type === 'maxLength' && 'Minutes must be at most 2 characters.'}
                  {errors.mm?.type === 'pattern' && 'Minutes must be a number.'}
                </Text>
              )}
            </View>
            <View style={styles.formColumn}>
            <Controller
                control={control}
                rules={{
                  required: true,
                  min: 0,
                  max: 59,
                  maxLength: 2,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Please enter a number',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Text style={styles.formLabel}>Seconds</Text>
                    <TextInput
                      style={styles.formInput}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="00"
                    />
                  </>
                )}
                name="ss"
              />
              {errors.ss && (
                <Text style={styles.formError}>
                  {errors.ss?.type === 'required' && 'Seconds is required'}
                  {errors.ss?.type === 'min' && 'Seconds must be at least 0.'}
                  {errors.ss?.type === 'max' && 'Seconds must be at most 59.'}
                  {errors.ss?.type === 'maxLength' && 'Seconds must be at most 2 characters.'}
                  {errors.ss?.type === 'pattern' && 'Seconds must be a number.'}
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.formButtons}>
          <Button
            text="Save"
            onPress={handleSubmit(onSubmit)}
          />
          <Button
            text="Cancel"
            onPress={onCancel}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: '16px',
    backgroundColor: '#fff',
  },
  form: {
    marginTop: '16px',
  },
  formBlock: {
    marginBottom: '16px',
    padding: '16px',
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  formRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '-8px',
    marginRight: '-8px',
  },
  formColumn: {
    flex: 1,
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  formLabel: {
    marginBottom: '8px',
    fontWeight: '700',
  },
  formInput: {},
  formError: {
    marginTop: '8px',
    color: 'red'
  },
  formButtons: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  addTimer: ({ timer, onComplete }) => dispatch((dispatch, getState) => {
    dispatch({ type: 'ADD_TIMER', payload: { timer } });
    return onComplete();
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTimerScreen);
