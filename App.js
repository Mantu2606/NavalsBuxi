// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Src/component/Home';
import SplashScreen from './Src/component/SplashScreen';
import SignupPage from './service/SignupPage';
import Example from './service/Example';
import Practice from './service/Practice';
import Online from './Src/component/Screen/Online';
import Portal from './Src/component/Screen/Portal';
import Teacher from './Src/component/Screen/Teacher';
import Main from './Src/component/Main';

 const Stack = createNativeStackNavigator();
 const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}  />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="online" component={Online} />
        <Stack.Screen name="portal" component={Portal} />
        <Stack.Screen name="teacher" component={Teacher} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;
