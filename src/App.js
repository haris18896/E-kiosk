import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from './infrastructures/theme/index';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './redux/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Venue from './screens/venue';
import Main from './screens/main';
import CheckIn from './screens/check-in';
import Thankyou from './screens/thankyou';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Venue"
              component={Venue}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CheckIn"
              component={CheckIn}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Thankyou"
              component={Thankyou}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
