// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Deepti's Screen Added Here
import SplashScreen from './src/Screen/SplashScreen';
import RegistrationScreen from './src/Screen/RegistrationScreen';
import OtpverificationScreen from './src/Screen/OtpverificationScreen';
import SelectLocationManually from './src/Screen/SelectLocationManually';
import EarningScreen from './src/Screen/EarningScreen';
import EarningScreen2 from './src/Screen/EarningScreen2';
import Patientlist from './src/Screen/Patientlist';
import CallcutmiddleScreen from './src/Screen/CallcutmiddleScreen';
import Prescriptionpreview from './src/Screen/Prescriptionpreview';
import Patientdetails2 from './src/Screen/Patientdetails2';
import MemebershipScreen from './src/Screen/MemebershipScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpverificationScreen"
          component={OtpverificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectLocationManually"
          component={SelectLocationManually}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name=" EarningScreen"
          component={EarningScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EarningScreen2"
          component={EarningScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Patientlist"
          component={Patientlist}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CallcutmiddleScreen"
          component={CallcutmiddleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Prescriptionpreview"
          component={Prescriptionpreview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Patientdetails2"
          component={Patientdetails2}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MemebershipScreen"
          component={MemebershipScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
