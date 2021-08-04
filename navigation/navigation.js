import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';
import HomeScreen, { screenOptions as HomeScreenOptions } from '../screens/homeStack/home';
import Promo, { screenOptions as PromoScreenOptions } from '../screens/homeStack/promo';
import CashScreen from '../screens/cash';
import ExploreScreen, { screenOptions as ExploreScreenOptions } from '../screens/explore';
import ChatScreen, { screenOptions as ChatScreenOptions } from '../screens/chat';
import { deviceWidth } from '../constants/dimensions';
import ProfileScreen, { screenOptions as ProfileScreenOptions } from '../screens/profile';
import CompanyDetailScreen, { screenOptions as CompanyDetailScreenOptions} from '../screens/companyDetail';


const RootMainStackNavigator = createStackNavigator();
const HomeStackMainNavigator = createStackNavigator();
const CashStackNavigator = createStackNavigator();
const ExploreStackNavigator = createStackNavigator();
const ChatStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();
const BottomNavigator = createBottomTabNavigator();



const HomeMainNavigator = () => {
    const defaultNavOptions = {
        // headerTitleStyle: {
        //     color: '#fff'
        // },
        // headerTransparent: true,
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
        // below code to hide title and give screen a full height
        // headerShown: false
    }

    return (
        <HomeStackMainNavigator.Navigator screenOptions={defaultNavOptions}>
            <HomeStackMainNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={HomeScreenOptions}
            />
            <HomeStackMainNavigator.Screen
                name="CompanyDetail"
                component={CompanyDetailScreen}
                options={CompanyDetailScreenOptions}
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
    }

    return (
        <CashStackNavigator.Navigator screenOptions={defaultNavOptions} mode={'modal'}>
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
    }

    return (
        <ExploreStackNavigator.Navigator screenOptions={defaultNavOptions} mode={'modal'}>
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
    }

    return (
        <ChatStackNavigator.Navigator screenOptions={defaultNavOptions} mode={'modal'}>
            <ChatStackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={ChatScreenOptions}
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
    }

    return (
        <ProfileStackNavigator.Navigator screenOptions={defaultNavOptions} mode={'modal'}>
            <ProfileStackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={ProfileScreenOptions}
            />
        </ProfileStackNavigator.Navigator>
    )
}


const MainTabNavigator = () => {
    return (
        <BottomNavigator.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = 'chart-area';
                }
                else if (route.name === 'Cash') {
                    iconName = 'wallet';
                }
                else if (route.name === 'Explore') {
                    iconName = 'search';
                }
                else if (route.name === 'Chat') {
                    return <Ionicons name="ios-chatbox-ellipses-sharp" size={24} color={color} />
                }
                else if (route.name === 'Profile') {
                    return <Feather name="user" size={24} color={color} />
                }
                // You can return any component that you like here!
                return <FontAwesome5 name={iconName} size={24} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: '#212529',
                inactiveTintColor: '#6c757d',
                showLabel: false,
                style: {
                    paddingHorizontal: deviceWidth / 20,
                    borderTopColor: '#fff',
                }
            }}
        >
            <BottomNavigator.Screen
                name="Home"
                component={HomeMainNavigator}
            />
            <BottomNavigator.Screen
                name="Cash"
                component={CashNavigator}
            />
            <BottomNavigator.Screen
                name="Explore"
                component={ExploreNavigator}
            />
            <BottomNavigator.Screen
                name="Chat"
                component={ChatNavigator}
            />
            <BottomNavigator.Screen
                name="Profile"
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
        // headerStyle: {
        //     shadowColor: 'white',
        //     shadowRadius: 0,
        //     shadowOffset: {
        //         height: 0,
        //     },
        // }
        // below code to hide title and give screen a full height
        headerShown: false,
    }

    return (
        <RootMainStackNavigator.Navigator screenOptions={defaultNavOptions} mode={'modal'}>
            <RootMainStackNavigator.Screen
                name="Home"
                component={MainTabNavigator}
                // options={{ headerShown: false }}
            />
            <RootMainStackNavigator.Screen
                name="Promo"
                component={Promo}
                options={PromoScreenOptions}
            />
        </RootMainStackNavigator.Navigator>
    )
}