import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import TabbedPageNavigator from './Pages/TabbedPageNavigator';
//import TabbedPageNavigator from './Pages/TabbedPage';
//import MaterialTabbedPage from './Pages/MaterialTabbedPage';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="FirstPage">
      <Drawer.Screen
        name="FirstPage"
        component={Page1}
        options={{ drawerLabel: 'FirstPage' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={Page2}
        options={{ drawerLabel: 'SecondPage' }}
      />
      <Drawer.Screen
        name="TabbedPageNavigator"
        component={TabbedPageNavigator}
        options={{ drawerLabel: 'Tabs' }}
      />

    </Drawer.Navigator>
  );
}


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen name="FirstPage" component={Page1} />
          <Stack.Screen name="SecondPage" component={Page2} />
          <Stack.Screen name="TabbedPageNavigator" component={TabbedPageNavigator} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}
export default App;
