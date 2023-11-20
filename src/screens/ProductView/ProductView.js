import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { width, height } from '../../components/constants/Dimension'
import { Styles } from './ProductViewCss'
import Header from '../../components/header/Header'

function RenderItem({ item }) {
    
    const navigation = useNavigation()
    const image = item.item.images[0]

    const handleView = (item) => {
        navigation.navigate("ProductFullView", { item: item })
    }

    return (
        <View style={Styles.componentStyle}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleView(item.item)}>
                <View style={{ width: width * .45, flexDirection: 'column' }}>
                    <View>
                        <Image source={{ uri: image }} width={width * .45} height={height * .15} style={{ resizeMode: 'cover' }} />
                    </View>
                    <View style={{ margin: 5 }} >
                        <Text style={Styles.textStyle}>Brand: {item.item.brand}</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                        <Text style={Styles.textStyle}>Price: ${item.item.price}/-</Text>
                        <Text style={Styles.textStyle}>Stock: {item.item.stock}</Text>
                        </View>
                        <Text style={{...Styles.textStyle }}>Description: {item.item.description.slice(0, 20)}...</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default function ProductView({route }) {

    const { item } = route.params

    const [products, setProducts] = React.useState([])

    React.useEffect(()=>{
        let data = [...item]
        setProducts([...data])
    },[])

    return (
        <View style={Styles.mainContainer}>
            <Header title={`All product: ${products[0]?.category}`} />
            {products.length  === 0 ?
                <ActivityIndicator style={{alignSelf:'center'}} />
                :
                <FlatList
                    data={products}
                    style={{ flexDirection: 'column' }}
                    numColumns={2}
                    contentContainerStyle={{alignItems: 'center' }}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => <RenderItem item={item} />}
                />
            }
        </View>
    )
}
