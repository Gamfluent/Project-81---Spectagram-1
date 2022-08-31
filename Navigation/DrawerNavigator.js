import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/Profile';

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <drawer.Navigator screenOptions={{headerShown: true}}>
            <drawer.Screen name='Home' component={TabNavigator}/>
            <drawer.Screen name='Profile' component={Profile}/>
        </drawer.Navigator>
    )
}

export default DrawerNavigator;