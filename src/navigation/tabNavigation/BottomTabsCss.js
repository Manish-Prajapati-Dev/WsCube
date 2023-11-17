import { StyleSheet } from "react-native"
import { height } from "../../components/constants/Dimension"

export const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        padding: 4
    },
    tabBarStyle: {
        height: height * .08,
        backgroundColor: '#2d3436',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        borderColor: '#353b48',
        borderWidth: 1
    },
    otherTabs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#353b48',
    },
    otherTabsText:{
        color:'#FFF',
        fontFamily:'Poppins-Regular'
    }
})