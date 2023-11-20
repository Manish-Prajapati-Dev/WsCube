import { View, StatusBar, ScrollView, ActivityIndicator, RefreshControl, Text } from 'react-native'
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

    const displayCategory = () => {
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        return uniqueCategories.map((item) => {
            const dd = data.filter((i) => { return (i.category === item) })
            // console.log("dd>>>>",dd)
            return (<View>
                <FlatListCom
                    data={dd}
                    heading={item}
                    clickSeeAll={() => navigation.navigate("ProductView", {
                        item: dd
                    })}
                />
            </View>
            )
        })
    }

    React.useEffect(() => {
        apiCall()
    }, [])

    return (
        <View style={Styles.mainContainer} >
            <StatusBar translucent backgroundColor={'transparent'} />
            <Header title="Products" />
            {loading ?
                <ActivityIndicator style={Styles.indicatorStyle} />
                :
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
                        />}
                >
                    {displayCategory()}
                </ScrollView>
            }
        </View>
    )
}