import { RefreshControl, StyleSheet, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import SafeAreaContainer from '../../components/common/SafeAreaContainer'
import FlatlistContainer from '../../components/common/FlatlistContainer'
import { EventContext } from '../../context/EvenContext'
import { OpacityButton } from '../../components/Button'
import { width } from '../../utils/Dimensions'
import AppHeader from '../../components/common/AppHeader'
import EventCard from '../../components/Cards/EventCard'
import { AppContext } from '../../context/AuthContext'
import { AppColor } from '../../components/common/AppColor'

const DashboardScreen = ({ navigation }) => {
    const { onLogout } = useContext(AppContext)
    const { onGetEvents, evenData, loading } = useContext(EventContext)

    useEffect(() => {
        onGetEvents()
    }, [])

    return (
        <SafeAreaContainer>
            <AppHeader title={'Events'} navigation={navigation} isRight rightIconName={'logout'} rightPress={() => onLogout()} />
            <FlatlistContainer
                data={evenData}
                renderItem={({ item, index }) => (<EventCard key={index} item={item} index={index} />)}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={() => onGetEvents()} />}
            />
            <OpacityButton style={styles.btnContainer} onPress={() => navigation.navigate('AddEvent')}>
                <Text style={styles.heading}>
                    Add Event
                </Text>
            </OpacityButton>
        </SafeAreaContainer>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        bottom: width * .04,
        right: width * .03,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColor.PRIMARYBG,
        zIndex: 1,
        padding: width * .02,
        borderRadius: width * .01
    },
    heading: {
        fontSize: width * .03,
        color: AppColor.PRIMARYWHITE,
        fontWeight: '500'
    }
})