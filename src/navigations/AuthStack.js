import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../screens/auth/AuthScreen'

const Stack = createStackNavigator()

const AuthStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='Auth' component={AuthScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack