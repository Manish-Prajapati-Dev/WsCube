import { StyleSheet } from "react-native"
import { width } from "../../components/constants/Dimension"

export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#353b48',
        flex: 1
    },
    textStyle: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    detailContainer: { margin: 10 },
    detailTextStyle: { flexDirection: 'row', justifyContent: 'space-between', width: width * .9 },
    imageConatiner: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        resizeMode: 'contain',
        overflow: 'hidden',
        margin: 'auto'
    },
    mT10:
    {
        marginTop: 5,
        marginBottom: 5
    }
})