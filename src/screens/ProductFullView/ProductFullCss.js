import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#353b48',
        flex: 1
    },
    textStyle: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold'
    },
    detailContainer: { margin: 10 },
    imageConatiner: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        resizeMode: 'contain',
        overflow: 'hidden',
        margin: 'auto'
    }
})