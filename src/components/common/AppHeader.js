import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/Dimensions'
import SvgIcons from './SvgIcons'
import { PressableButton } from '../Button'
import { AppColor } from '../common/AppColor'

const AppHeader = ({ title, isLeft, navigation, rightIconName, rightPress, isRight }) => {

    const renderLeft = () => {
        return (
            <View style={[styles.subContainer]}>
                <PressableButton style={styles.btnContainer} onPress={() => navigation.goBack()}>
                    <SvgIcons name={'back'} />
                </PressableButton>
                <Text style={[styles.heading, { flex: 1 }]}>
                    {title}
                </Text>
            </View>
        )
    }

    const renderRight = () => {
        return (
            <View style={styles.subContainer}>
                <Text style={[styles.heading, { paddingLeft: width * .025, textAlignVertical: 'center' }]}>
                    {title}
                </Text>
                <PressableButton style={styles.btnContainer} onPress={rightPress}>
                    <SvgIcons name={rightIconName} />
                </PressableButton>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {!isLeft && !isRight &&
                <Text style={styles.heading}>
                    {title}
                </Text>}

            {isLeft && renderLeft()}
            {isRight && renderRight()}
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        height: width * .12,
        backgroundColor: AppColor.PRIMARYWHITE,
        padding: width * .01,
        shadowColor: AppColor.PRIMARYGRAY,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.7
    },
    heading: {
        fontSize: width * .03,
        fontWeight: '600',
        color: AppColor.PRIMARYBG
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: AppColor.PRIMARYWHITE,
    },
    btnContainer: {
        flex: 0,
        backgroundColor: AppColor.PRIMARYWHITE,
        justifyContent: 'center',
        alignItems: 'center',
        padding: width * .02
    }
})