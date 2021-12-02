import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';
import HomeScreen, { screenOptions as HomeScreenOptions } from '../screens/homeStack/home';
import Promo, { screenOptions as PromoScreenOptions } from '../screens/homeStack/promo';
import CashScreen from '../screens/cash';
import ExploreScreen, { screenOptions as ExploreScreenOptions } from '../screens/explore';
import ChatScreen, { screenOptions as ChatScreenOptions } from '../screens/messageStack/chat';
import MessageScreen, { screenOptions as MessageScreenOptions } from '../screens/messageStack/message';
import { deviceWidth } from '../constants/dimensions';
import ProfileScreen, { screenOptions as ProfileScreenOptions } from '../screens/profile';
import CompanyDetailScreen, { screenOptions as CompanyDetailScreenOptions } from '../screens/companyDetail';
import CryptoDetailScreen, { screenOptions as CryptoDetailScreenOptions } from '../screens/cryptoDetailScreen';
import BuyingPowerScreen, { screenOptions as BuyingPowerScreenOptions } from '../screens/buyingPower';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const RootMainStackNavigator = createStackNavigator();
const HomeStackMainNavigator = createStackNavigator();
const CashStackNavigator = createStackNavigator();
const ExploreStackNavigator = createStackNavigator();
const ChatStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();
const BottomNavigator = createBottomTabNavigator();



const HomeMainNavigator = () => {
    const defaultNavOptions = {
        headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
        },
        cardStyle: {
            backgroundColor: '#fff'
        },
        // below code to hide title and give screen a full height
    }

    return (
        <HomeStackMainNavigator.Navigator screenOptions={defaultNavOptions}>
            <HomeStackMainNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={HomeScreenOptions}
            />
            <HomeStackMainNavigator.Screen
                name="CryptoDetail"
                component={CryptoDetailScreen}
                options={CryptoDetailScreenOptions}
            />
            <HomeStackMainNavigator.Screen
                name="CompanyDetail"
                component={CompanyDetailScreen}
                options={CompanyDetailScreenOptions}
            />
            <HomeStackMainNavigator.Screen
                name="BuyingPower"
                component={BuyingPowerScreen}
                options={BuyingPowerScreenOptions}
            />
        </HomeStackMainNavigator.Navigator>
    )
}


const CashNavigator = () => {
    const defaultNavOptions = {
        headerTitleStyle: {
            color: '#000'
        },
        headerShown: false,
        cardStyle: {
            backgroundColor: '#fff'
        },
        presentation: 'transparentModal'
    }

    return (
        <CashStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <CashStackNavigator.Screen
                name="Card"
                component={CashScreen}
            />
        </CashStackNavigator.Navigator>
    )
}


const ExploreNavigator = () => {
    const defaultNavOptions = {
        headerStyle: {
            backgroundColor: '#fff',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
        },
        cardStyle: {
            backgroundColor: '#fff'
        },
        presentation: 'modal'

    }

    return (
        <ExploreStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <ExploreStackNavigator.Screen
                name="Explore"
                component={ExploreScreen}
                options={ExploreScreenOptions}

            />
        </ExploreStackNavigator.Navigator>
    )
}


const ChatNavigator = () => {
    const defaultNavOptions = {
        headerStyle: {
            backgroundColor: '#fff',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
        },
        cardStyle: {
            backgroundColor: '#fff'
        },
        presentation: 'card',
        headerBackTitle: ''
    }

    return (
        <ChatStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <ChatStackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={ChatScreenOptions}
            />
            <ChatStackNavigator.Screen
                name="Message"
                component={MessageScreen}
                options={MessageScreenOptions}
            />
        </ChatStackNavigator.Navigator>
    )
}


const ProfileNavigator = () => {
    const defaultNavOptions = {
        headerStyle: {
            backgroundColor: '#fff',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
        },
        cardStyle: {
            backgroundColor: '#fff'
        },
        presentation: 'modal'
    }

    return (
        <ProfileStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <ProfileStackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={ProfileScreenOptions}
            />
        </ProfileStackNavigator.Navigator>
    )
}

const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName
}




const MainTabNavigator = () => {
    return (
        <BottomNavigator.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: getFocusedRouteNameFromRoute(route) === 'CryptoDetail' ? '#fff' : '#212529',
            tabBarInactiveTintColor: '#6c757d',
            tabBarShowLabel: false,
            tabBarStyle: {
                paddingHorizontal: deviceWidth / 20,
                borderTopColor: 'transparent',
                backgroundColor: getFocusedRouteNameFromRoute(route) === 'CryptoDetail' ? '#100a20' : '#fff'
            },
            tabBarIcon: ({ color }) => {
                let iconName;
                if (route.name === 'Main') {
                    iconName = 'chart-area';
                }
                else if (route.name === 'Cash') {
                    iconName = 'wallet';
                }
                else if (route.name === 'Search') {
                    iconName = 'search';
                }
                else if (route.name === 'Messages') {
                    return <Ionicons name="ios-chatbox-ellipses-sharp" size={24} color={color} />
                }
                else if (route.name === 'Settings') {
                    return <Feather name="user" size={24} color={color} />
                }
                // You can return any component that you like here!
                return <FontAwesome5 name={iconName} size={24} color={color} />;
            },
        })}
        >
            <BottomNavigator.Screen
                name="Main"
                component={HomeMainNavigator}
            />
            <BottomNavigator.Screen
                name="Cash"
                component={CashNavigator}
            />
            <BottomNavigator.Screen
                name="Search"
                component={ExploreNavigator}
            />
            <BottomNavigator.Screen
                name="Messages"
                component={ChatNavigator}
            />
            <BottomNavigator.Screen
                name="Settings"
                component={ProfileNavigator}
            />
        </BottomNavigator.Navigator>
    )
}


export const RootMainNavigator = () => {

    const defaultNavOptions = {
        headerTitleStyle: {
            color: '#000',
        },
        // below code to hide title and give screen a full height
        headerShown: false,
        headerTransparent: false,
        presentation: 'transparentModal',
    }

    return (
        <RootMainStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <RootMainStackNavigator.Screen
                name="Home"
                component={MainTabNavigator}
            />
            <RootMainStackNavigator.Screen
                name="Promo"
                component={Promo}
                options={PromoScreenOptions}
            />
        </RootMainStackNavigator.Navigator>
    )
}