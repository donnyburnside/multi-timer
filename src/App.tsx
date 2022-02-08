import * as React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './store';
import Navigation from './navigation';
import Ticker from './components/Ticker';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <Ticker />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
}
