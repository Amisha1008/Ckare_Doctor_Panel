// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/Screen/ProfileScreen';
import Login from './src/Screen/Loginscreen';
import Regscreen from './src/Screen/Registrationthreescreen';
import Waitverify from './src/Screen/Waitforverification';
import IfcallcutsScreen from './src/Screen/Ifcallcuts';
import PatientScreen from './src/Screen/PatientDetailsScreen';
import PatientScreentwo from './src/Screen/PatientScreentwo';
import HomeConsult from './src/Screen/HomeConsultPatientScreen';
import AfterCall from './src/Screen/AfterCallEnded';
import HScreen from './src/Screen/Home';
import MembershipFree from './src/Screen/MembershipFreeTrial';
import ReferEarn from './src/Screen/ReferEarnScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Regscreen" component={Regscreen} />
      <Stack.Screen name="Waitverify" component={Waitverify} />
      <Stack.Screen name="HScreen" component={HScreen} /> 
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="IfcallcutsScreen" component={IfcallcutsScreen} />    
      <Stack.Screen name="PatientScreen" component={PatientScreen} />  
      <Stack.Screen name="PatientScreentwo" component={PatientScreentwo} />   
      <Stack.Screen name="AfterCall" component={AfterCall} />  
      <Stack.Screen name="HomeConsult" component={HomeConsult} />   
      <Stack.Screen name="MembershipFree" component={MembershipFree} />  
      <Stack.Screen name="ReferEarn" component={ReferEarn} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;