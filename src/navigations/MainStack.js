import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/Home/DashboardScreen'
import AddEventScreen from '../screens/Home/AddEventScreen'

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='DashBoard'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='DashBoard' component={DashboardScreen} />
            <Stack.Screen name='AddEvent' component={AddEventScreen} />
        </Stack.Navigator>
    )
}

export default MainStack
