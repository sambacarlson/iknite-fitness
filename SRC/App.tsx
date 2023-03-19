import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Overview from './screens/Overview';
import Exercise from './screens/Exercise';
import {variables} from './variables/global';

export type RootStackParams = {
  Home: JSX.Element;
  Overview: JSX.Element;
  Exercise: JSX.Element;
};
const Stack = createNativeStackNavigator<RootStackParams>();

//global variables
const customColors = variables.colors;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const colorTheme = {
    backgroundColor: isDarkMode ? Colors.darker : customColors.primaryLighter,
    headerStyle: {
      backgroundColor: isDarkMode
        ? customColors.primaryDark
        : customColors.primaryLight,
    },
  };
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colorTheme.backgroundColor}
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: colorTheme.headerStyle,
          headerTintColor: Colors.lighter,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Exercise" component={Exercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
