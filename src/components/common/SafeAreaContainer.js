import { View, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeAreaContainer = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.container}>
                    {children}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SafeAreaContainer

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})