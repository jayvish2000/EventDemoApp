import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/Dimensions'
import { AppColor } from '../common/AppColor'

const EventCard = ({ item, index }) => {

    return (
        <View style={styles.card} key={index}>
            <Text style={styles.heading}>
                {index + 1}. {item?.title}
            </Text>
            <Text style={styles.txt}>
                {item?.body}
            </Text>
            <Text style={styles.txt}>
                {item?.eventDuration}
            </Text>
        </View>
    )
}

export default EventCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 1,
        borderColor: AppColor.PRIMARYLIGHTBLACK,
        shadowColor: AppColor.PRIMARYGRAY,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.7,
        elevation: 4,
        padding: width * .02,
        backgroundColor: AppColor.PRIMARYWHITE,
        margin: width * .02,
        borderRadius: width * .01,
    },
    heading: {
        fontSize: width * .03,
        fontWeight: '600',
        color: AppColor.PRIMARYBG,
        textTransform: 'capitalize'
    },
    txt: {
        fontSize: width * .027,
        fontWeight: '500',
        color: AppColor.PRIMARYGRAY,
        textTransform: 'capitalize',
        marginTop: width * .01
    }
})