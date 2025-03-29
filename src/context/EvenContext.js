import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../api";
import { Alert } from "react-native";

export const EventContext = createContext()

const EventsContext = ({ children }) => {

    const [evenData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    const onGetEvents = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${BASE_URL}/posts`)
            if (res.data) {
                setEventData([...evenData, ...res.data])
            } else {
                Alert.alert('No data found.')
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('event error', error)
            Alert.alert('Something went wrong!')
        }
    }

    const values = {
        setLoading,
        loading,
        evenData,
        setEventData,
        onGetEvents
    }

    return (
        <EventContext.Provider value={values}>
            {children}
        </EventContext.Provider>
    )

}

export default EventsContext
