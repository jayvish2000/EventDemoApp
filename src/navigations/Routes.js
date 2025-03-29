import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'
import { AppContext } from '../context/AuthContext'
import AuthStack from './AuthStack'

const Routes = () => {
    const { token } = useContext(AppContext)

    return (
        <NavigationContainer>
            {token ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes
