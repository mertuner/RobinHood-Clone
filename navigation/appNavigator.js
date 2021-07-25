import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { RootMainNavigator } from './navigation';


const AppNavigator = () => {

    return (
        <NavigationContainer>
            <StatusBar style={'auto'}/>
            <RootMainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator

