import { StyleSheet, View } from 'react-native';
import Home from './pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './pages/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Favorite from './pages/Favorite';
import { COLORS } from './styleConstants';



const Tab = createBottomTabNavigator()

// const CustomIcon = ({ color, size }) => {
//   return (
//     <View style={{
//       width: 60,
//       padding:5,
//       borderRadius: 20,
//       alignItems: 'center',
//       justifyContent: 'center',
//       overflow: 'hidden', 
//       backgroundColor:COLORS.LIGHT}}>
//       <Icon name='home' type='octicon' color={color} />
//     </View>
//   )
// }

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.LIGHT_GREY,
        
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderTopColor:'white',
          position: "absolute",
          bottom: 0,
        }
      }}

    >
      <Tab.Screen name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => 
            <Icon name='home' type='octicon' color={color} />

        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Icon name='search' type='octicon' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' type='octicon' color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
