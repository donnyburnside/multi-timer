import * as React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function TimerForm({ defaultValues, onSubmit, onBack }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
  });

  return (
    <View style={styles.form}>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 3,
            maxLength: 12,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text>Title</Text>
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
          name="title"
        />
        {errors.title && (
          <Text>
            {errors.title?.type === 'required' && 'Title is required'}
            {errors.title?.type === 'minLength' && 'Title must be at least 3 characters.'}
            {errors.title?.type === 'maxLength' && 'Title must be at most 12 characters.'}
          </Text>
        )}
      </View>
      <View>
        <View>
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
                <Text>Hours</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="hh"
          />
          {errors.hh && (
            <Text>
              {errors.hh?.type === 'required' && 'Hours is required'}
              {errors.hh?.type === 'min' && 'Hours must be at least 0.'}
              {errors.hh?.type === 'max' && 'Hours must be at most 24.'}
              {errors.hh?.type === 'maxLength' && 'Hours must be at most 2 characters.'}
              {errors.hh?.type === 'pattern' && 'Hours must be a number.'}
            </Text>
          )}
        </View>
        <View>
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
                <Text>Minutes</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="mm"
          />
          {errors.mm && (
            <Text>
              {errors.mm?.type === 'required' && 'Minutes is required'}
              {errors.mm?.type === 'min' && 'Minutes must be at least 0.'}
              {errors.mm?.type === 'max' && 'Minutes must be at most 59.'}
              {errors.mm?.type === 'maxLength' && 'Minutes must be at most 2 characters.'}
              {errors.mm?.type === 'pattern' && 'Minutes must be a number.'}
            </Text>
          )}
        </View>
        <View>
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
                <Text>Seconds</Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </>
            )}
            name="ss"
          />
          {errors.ss && (
            <Text>
              {errors.ss?.type === 'required' && 'Seconds is required'}
              {errors.ss?.type === 'min' && 'Seconds must be at least 0.'}
              {errors.ss?.type === 'max' && 'Seconds must be at most 59.'}
              {errors.ss?.type === 'maxLength' && 'Seconds must be at most 2 characters.'}
              {errors.ss?.type === 'pattern' && 'Seconds must be a number.'}
            </Text>
          )}
        </View>
      </View>
      <View>
        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text>Save</Text>
        </Pressable>
        <Pressable onPress={onBack}>
          <Text>Back</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    //
  },
});
