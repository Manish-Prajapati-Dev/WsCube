import { View, StatusBar, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import FlatListCom from '../../components/flatList/FlatListCom'
import { Styles } from './HomeScreenCss'

export default function HomeScreen({ navigation }) {

    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        apiCall()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, [])

    const apiCall = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products")
            if (res) {
                let response = await res.json()
                setData((response.products))
                setLoading(false)
            }
            else {
                console.log("Error in api", res)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        apiCall()
    }, [])

    return (
        <View style={Styles.mainContainer} >
            <StatusBar translucent backgroundColor={'transparent'} />
            <Header />
            {loading ?
                <ActivityIndicator style={{ flex: 1, alignSelf: 'center' }} />
                :
                <ScrollView 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                    />}
                >
                    <FlatListCom data={data} heading="Popular" clickSeeAll={() => navigation.navigate("ProductView",{item:data})} />
                    <View style={Styles.m10} />
                    <FlatListCom data={data} heading="Recent view" clickSeeAll={() => navigation.navigate("ProductView",{item:data})} />
                    <View style={Styles.m10} />
                    <FlatListCom data={data} heading="Trending" clickSeeAll={()=>navigation.navigate("ProductView",{item:data})} />
                </ScrollView>
            }
        </View>
    )
}