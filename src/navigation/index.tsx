import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AddTimerScreen from '../screens/AddTimerScreen';
import EditTimerScreen from '../screens/EditTimerScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="AddTimer"
          component={AddTimerScreen}
          options={{
            title: 'Add Timer',
          }}
        />
        <Stack.Screen
          name="EditTimer"
          component={EditTimerScreen}
          options={{
            title: 'Edit Timer',
          }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{
            title: 'Not Found',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
