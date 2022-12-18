import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TimerView from './src/view/time/TimerView';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Timer"
          component={TimerView}
          options={{
            headerRight: () => (
              <Button
                onPress={() => {
                  console.log('This is a button!');
                }}
                title="Info"
                color="#f00"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
