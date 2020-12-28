import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Map from './screens/Map';
import Incidents from './screens/Incidents';
import Details from './screens/Details';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Incidents">
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
