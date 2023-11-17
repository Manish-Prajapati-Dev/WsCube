import { StyleSheet, StatusBar } from "react-native"
import { height, width } from "../../components/constants/Dimension"

export const Styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:  '#353b48'
    },
    textStyle: {
        color: '#FFF',
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold'
    },
    componentStyle: {
        backgroundColor:'#2d3436',
        width: width * .45,
        height: height * .3,
        margin: 5,
        overflow: 'hidden',
        borderRadius: 5,
        borderColor: '#f1f2f6',
        borderWidth: 0.1,
        elevation: 12,
        shadowColor: 'rgba(255,255,255,0.05)'
    }
})