import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{
            headerShown: false,
            title: 'Not Found',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
