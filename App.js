import Historic from './pages/historic/Historic';
import Map from './pages/map/Map';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { MeuContextoProvider } from './MeuContexto';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MeuContextoProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ff4a4a',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: '#ff4a4a',
            borderBottomWidth: 0,
            
          },
          headerTintColor: "#fff",
          
        }}
      >
        <Tab.Screen 
          name="Mapa" 
          component={Map} 
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name='map-marker' color={color} size={size} />
            }
          }}
        />
        <Tab.Screen 
          name="Histórico" 
          component={Historic} 
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name='history' color={color} size={size} />
            }
          }}
        />
      </Tab.Navigator>  
    </NavigationContainer>
    </MeuContextoProvider>
  );
}
