import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TimerView from './src/view/time/TimerView';
import {Button, View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

interface DetailsScreenProps {
  navigation: any;
}

const DetailsScreen = (_props: DetailsScreenProps) => {
  const {navigation} = _props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Timer')}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} />
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
