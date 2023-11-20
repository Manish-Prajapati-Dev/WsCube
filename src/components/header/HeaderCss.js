import {StyleSheet,StatusBar} from "react-native"
import { height, width } from "../constants/Dimension"

export const Styles = StyleSheet.create({
    mainContainer:{
        marginTop:StatusBar.currentHeight,
        justifyContent:'center',
        backgroundColor:'#2d3436',
        width:width,
        height:height*.08,
        position:'relative',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    textStyle:{
        color:'#FFF',
        fontSize:20,
        marginHorizontal:10,
        fontFamily:'Poppins-Regular',
        textTransform:'capitalize'
    }
})