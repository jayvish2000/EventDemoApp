import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AuthContext'
import SafeAreaContainer from '../../components/common/SafeAreaContainer'
import { width } from '../../utils/Dimensions'
import { OpacityButton } from '../../components/Button'
import { AppColor } from '../../components/common/AppColor'

const AuthScreen = () => {
    const { onGoogle, loading } = useContext(AppContext)

    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                <Text style={[styles.heading, { fontSize: width * .06, color: AppColor.PRIMARYBG, marginBottom: width * .07 }]}>
                    Events App
                </Text>
                <OpacityButton loading={loading} color={AppColor.PRIMARYWHITE} onPress={() => onGoogle()}>
                    <Text style={styles.heading}>
                        LogIn with Google
                    </Text>
                </OpacityButton>
            </View>
        </SafeAreaContainer>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: width * .04,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: width * .03,
        fontWeight: '600',
        color: AppColor.PRIMARYWHITE
    }
})