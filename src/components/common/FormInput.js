import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { width } from '../../utils/Dimensions'
import { AppColor } from '../common/AppColor'

const FormInput = ({ placeholder, value, onChangeText, keyboardType, inputContainer, ...rest }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            style={[styles.inputContainer, inputContainer]}
            {...rest}
        />
    )
}

export default FormInput

const styles = StyleSheet.create({
    inputContainer: {
        fontSize: width * .03,
        fontWeight: '500',
        color: AppColor.PRIMARYBG,
        padding: width * .03,
        borderWidth: 1,
        borderColor: AppColor.PRIMARYLIGHTBLACK,
        marginBottom: width * .03,
        borderRadius: width * .01
    }
})