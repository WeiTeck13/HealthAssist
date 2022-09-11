/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * Practical - Navigation Applications
 *
 */

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './appPage/home';
import Profile from './appPage/profile';

import HealthCalc from './appPage/healthCalc';
import BMI from './appPage/bmi';
import BMR from './appPage/bmr';

import Insurance from './appPage/insurance';
import HealthAppointment from './appPage/healthAppointment';
import Contact from './appPage/contact';
import Medication from './appPage/medication';

import Pregnancy from './appPage/pregnancy';
import Diabetes from './appPage/diabetes';
import Elderly from './appPage/elderly';
import PostSurgery from './appPage/postSurgery';
import BloodDonation from './appPage/bloodDonation';

import Smoking from './appPage/smoking';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Health insurance" component={Insurance} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />

        <Stack.Screen name="Health calculator" component={HealthCalc} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Body mass index" component={BMI} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Basal metabolic rate" component={BMR} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />

        <Stack.Screen name="Health appointment" component={HealthAppointment} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Contact" component={Contact} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Medication" component={Medication} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />

        <Stack.Screen name="Pregnancy" component={Pregnancy} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Diabetes" component={Diabetes} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Elderly" component={Elderly} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Post-Surgery" component={PostSurgery} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
        <Stack.Screen name="Blood donation" component={BloodDonation} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />

        <Stack.Screen name="Smoking" component={Smoking} options={{ headerStyle: { backgroundColor: '#1976D2' }, headerTitleStyle: { color: 'white' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;