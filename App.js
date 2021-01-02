import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Map from './screens/Map';
import Incidents from './screens/Incidents';
import Details from './screens/Details';

const Stack = createStackNavigator();

const customScreen = (name, component) => {
  return (
    <Stack.Screen
      name={name}
      component={component}
      options={{
        headerStyle: {
          backgroundColor: 'darkorange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Incidents">
        {customScreen('Incidents', Incidents)}
        {customScreen('Map', Map)}
        {customScreen('Details', Details)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
