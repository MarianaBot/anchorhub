import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importăm ecranele (le vom crea imediat)
import LoginScreen from './src/screens/LoginScreen';
import AdminDashboard from './src/screens/AdminDashboard';
import CourseManagement from './src/screens/CourseManagement';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={AdminDashboard} />
        <Stack.Screen name="Courses" component={CourseManagement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
