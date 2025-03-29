import { ActivityIndicator } from 'react-native'
import React from 'react'
import { width } from '../../utils/Dimensions'
import { AppColor } from './AppColor'

const ActivityLoader = ({ size, color }) => {
    return (
        <ActivityIndicator size={width * .04 || size} color={AppColor.PRIMARYBG || color} />
    )
}

export default ActivityLoader
