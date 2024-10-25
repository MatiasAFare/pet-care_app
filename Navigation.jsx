import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Iconos
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

//pages
import Inicio from './pages/Inicio';
import Vacunas from './pages/Vacunas';
import Agenda from './pages/Agenda';


const InicioStackNavigator = createStackNavigator();

function MyStack() {
    return (
        <InicioStackNavigator.Navigator
            initialRouteName='Inicio'>

            <InicioStackNavigator.Screen
                options={{
                    headerShown: false,
                }}
                name='Inicio'
                component={Inicio}
            />
            <InicioStackNavigator.Screen
                options={{
                    headerShown: false,
                }}
                name='Agenda'
                component={Agenda}
            />
        </InicioStackNavigator.Navigator>
    )
}
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Inicio'
            screenOptions={{
                tabBarActiveTintColor: 'purple',

            }}
        >
            <Tab.Screen
                name="Inicio"
                component={MyStack}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="home-heart" size={size} color={color} />
                    },
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Dates" component={Agenda}
                options={{
                    tabBarLabel: 'Dates',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="calendar-multiselect" size={size} color={color} />
                    },
                    tabBarBadge: 10,
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}