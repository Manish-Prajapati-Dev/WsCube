import { View, Text, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import { width, height } from '../../components/constants/Dimension'
import {Styles} from "./ProductFullCss"

export default function FullProductView({ route,}) {

    const { item } = route.params

    const image = item.images

    const handleImage = () => {
        return (
            image.map((itemImage) => {
                return (
                    <Image source={{ uri: itemImage }} width={width} height={height * .55} style={Styles.imageConatiner} />
                )
            })
        )
    }

    return (
        <View style={Styles.mainContainer}>
            <ScrollView>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    {handleImage()}
                </ScrollView>
                <View style={Styles.detailContainer} >
                    <Text style={Styles.textStyle}>Title: {item.title}</Text>
                    <Text style={Styles.textStyle}>Price: {item.price}</Text>
                    <Text style={Styles.textStyle}>Category: {item.category}</Text>
                    <Text style={Styles.textStyle}>Discount: {item.discountPercentage}</Text>
                    <Text style={Styles.textStyle}>Brand: {item.brand}</Text>
                    <Text style={Styles.textStyle}>Rating: {item.rating}</Text>
                    <Text style={Styles.textStyle}>Stock: {item.stock}</Text>
                    <Text style={Styles.textStyle}>Description: {item.description}</Text>
                </View>
            </ScrollView>
        </View>
    )
}