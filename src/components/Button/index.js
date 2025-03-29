import { Pressable, StyleSheet, TouchableOpacity } from "react-native"
import { width } from "../../utils/Dimensions"
import { AppColor } from '../common/AppColor'
import ActivityLoader from "../common/ActivityLoader"

const OpacityButton = ({ onPress, children, loading, color, ...rest }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} activeOpacity={0.7} onPress={onPress} {...rest}>
            {loading ? <ActivityLoader color={color} /> : children}
        </TouchableOpacity>
    )
}

const PressableButton = ({ onPress, children, loading, color, ...rest }) => {
    return (
        <Pressable style={styles.btnContainer} onPress={onPress} {...rest}>
            {loading ? <ActivityLoader color={color} /> : children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        backgroundColor: AppColor.PRIMARYBG,
        padding: width * .02,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * .01
    },
    heading: {
        fontSize: width * .03,
        fontWeight: '600',
        color: AppColor.PRIMARYWHITE
    }
})

export { OpacityButton, PressableButton }