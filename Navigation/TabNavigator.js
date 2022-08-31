import * as react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/Feed';
import CreateStory from '../Screens/CreateStory';

const tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName
          if(route.name === 'Feed'){
            iconName = focused ? 'book' : 'book-outline'
          } else if(route.name === 'CreateStory'){
            iconName = focused ? 'create' : 'create-outline'
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inActiveTineColor: 'gray'
      }}> 
        <tab.Screen name='Feed' component={Feed} options={{headerShown: false}}/>
        <tab.Screen name='CreateStory' component={CreateStory} options={{headerShown: false}}/>
      </tab.Navigator>
  );
}  

export default BottomTabNavigator;

