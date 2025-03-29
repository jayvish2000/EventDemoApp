import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/Dimensions'
import { AppColor } from '../common/AppColor'

const EmptyMessge = ({ title, subTitle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                {title}
            </Text>
            {subTitle &&
                <Text style={styles.txt}>
                    {subTitle}
                </Text>}
        </View>
    )
}

export default EmptyMessge

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: width * .03,
        fontWeight: '500',
        color: AppColor.PRIMARYGRAY
    },
    txt: {
        fontSize: width * .025,
        fontWeight: '400',
        color: AppColor.PRIMARYGRAY
    }
})