import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export const AppContext = createContext()

const AuthContext = ({ children }) => {

    const [userInfo, setUserInfo] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getInitialValue = async () => {
            const res = await AsyncStorage.getItem('token')
            console.log('res', res)
            setToken(res)
        }

        getInitialValue()
    }, [])

    const onGoogle = async () => {
        setLoading(true)
        try {
            const res = await GoogleSignin.signIn()
            setLoading(false)
            if (res.data.user) {
                setUserInfo(res.data.user)
                setToken(res.data.idToken)
                await AsyncStorage.setItem('token', res.data.idToken)
            } else {
                Alert.alert('Something went wrong!')
            }
        } catch (error) {
            setLoading(false)
            console.log('error', error)
            Alert.alert('Something went wrong!')
        }
    }

    const onLogout = async () => {
        setLoading(true)
        try {
            await GoogleSignin.signOut()
            setLoading(false)
            setUserInfo(null)
            setToken(null)
            await AsyncStorage.removeItem('token')
        } catch (error) {
            setLoading(false)
            console.log('logout error', error)
            Alert.alert('Something went wrong!')
        }
    }

    const values = {
        loading,
        userInfo,
        token,
        setLoading,
        onGoogle,
        onLogout
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AuthContext
