import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import SafeAreaContainer from '../../components/common/SafeAreaContainer'
import AppHeader from '../../components/common/AppHeader'
import FormInput from '../../components/common/FormInput'
import { OpacityButton } from '../../components/Button'
import { width } from '../../utils/Dimensions'
import { EventContext } from '../../context/EvenContext'
import { useFormik } from 'formik'
import { eventSchema } from '../../utils/validtion'
import { AppColor } from '../../components/common/AppColor'

const AddEventScreen = ({ navigation }) => {
    const { setEventData, loading, setLoading } = useContext(EventContext)

    let formData = { eventName: '', eventDescription: '', eventDuration: '' }

    const formik = useFormik({
        initialValues: formData,
        validationSchema: eventSchema,
        onSubmit: (values) => addEvent(values)
    })

    const addEvent = async (values) => {
        setLoading(true)
        let formData = {
            userId: Math.random().toString(),
            id: Math.random().toString(),
            title: values.eventName,
            body: values.eventDescription,
            eventDuration: values.eventDuration
        }

        setEventData((prev) => [formData, ...prev])
        navigation.goBack()
        setLoading(false)
    }

    const renderErrorMessage = (mes) => <Text style={styles.txt}>{mes}</Text>

    return (
        <SafeAreaContainer>
            <AppHeader title={'Add Event'} isLeft navigation={navigation} />
            <View style={styles.container}>
                <FormInput
                    placeholder={'Event Name'}
                    value={formik.values.eventName}
                    keyboardType={'default'}
                    onChangeText={formik.handleChange('eventName')}
                    inputContainer={{ marginBottom: formik.errors.eventName && formik.touched.eventName ? 0 : width * .03 }}
                />
                {formik.errors.eventName && formik.touched.eventName && renderErrorMessage(formik.errors.eventName)}

                <FormInput
                    placeholder={'Event Description'}
                    value={formik.values.eventDescription}
                    keyboardType={'default'}
                    onChangeText={formik.handleChange('eventDescription')}
                    inputContainer={{ marginBottom: formik.errors.eventDescription && formik.touched.eventDescription ? 0 : width * .03 }}
                />
                {formik.errors.eventDescription && formik.touched.eventDescription && renderErrorMessage(formik.errors.eventDescription)}

                <FormInput
                    placeholder={'Event Duration'}
                    value={formik.values.eventDuration}
                    keyboardType={'default'}
                    onChangeText={formik.handleChange('eventDuration')}
                    inputContainer={{ marginBottom: formik.errors.eventDuration && formik.touched.eventDuration ? 0 : width * .03 }}
                />
                {formik.errors.eventDuration && formik.touched.eventDuration && renderErrorMessage(formik.errors.eventDuration)}

                <OpacityButton loading={loading} color={AppColor.PRIMARYWHITE} onPress={() => formik.handleSubmit()}>
                    <Text style={styles.heading}>
                        ADD NOW
                    </Text>
                </OpacityButton>
            </View>
        </SafeAreaContainer>
    )
}

export default AddEventScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: width * .04
    },
    heading: {
        fontSize: width * .03,
        fontWeight: 'bold',
        color: AppColor.PRIMARYWHITE
    },
    txt: {
        fontSize: width * .025,
        fontWeight: '300',
        color: AppColor.PRIMARYRED,
        marginBottom: width * .03,
        marginTop: width * .01
    }
})