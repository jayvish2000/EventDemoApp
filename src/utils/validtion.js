import * as Yup from 'yup'

const eventSchema = Yup.object().shape({
    eventName: Yup.string().required('Please provide Event Name'),
    eventDescription: Yup.string().required('Please provide Event Description'),
    eventDuration: Yup.string().required('Please provide Event Duration'),
})

export { eventSchema }