import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './pages/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name='home' type='octicon' color={color} />
            ),
          }}
        />
        <Stack.Screen
          name='Search'
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Icon name='search' type='octicon' color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
