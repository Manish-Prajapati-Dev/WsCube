import { View, Text, Button } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Styles } from "./BottomTabsCss";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesIC from "react-native-vector-icons/MaterialIcons"
import TVShowIC from "react-native-vector-icons/Entypo"
import AccIC from "react-native-vector-icons/MaterialCommunityIcons"
import SearchIC from "react-native-vector-icons/Fontisto"
import ProductView from "../../screens/ProductView/ProductView";
import FullProductView from "../../screens/ProductFullView/ProductFullView";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function BottomTabs() {

  function TVShows({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText} >TV Shows Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }


  function Celebrities({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText}>Celebrities Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }


  function Search({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText}>Search Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }



  function TMDB({navigation}) {
    return (
      <View style={Styles.otherTabs} >
        <Text style={Styles.otherTabsText}>TMDB Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    )
  }

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductView" component={ProductView} />
        <Stack.Screen name="ProductFullView" component={FullProductView} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        inactiveColor="#aaaaaa"
        activeColor="#F79F1F"
        screenOptions={{
          headerShown: false,
          tabBarStyle: Styles.tabBarStyle}}
        shifting={false}>
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}}>Movies</Text>,
            tabBarIcon: ({ color }) => <MoviesIC name="local-movies" size={20} color={color} />,
          })}
          name="Home" component={HomeStack}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} >TvShows</Text>,
            tabBarIcon: ({ color }) => <TVShowIC name="tv" size={20} color={color} />,
          })}
          name="TvShows" component={TVShows}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} >Celebrities</Text>,
            tabBarIcon: ({ color }) => <AccIC name="account" size={23} color={color} />,
          })}
          name="Celebrities" component={Celebrities}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} >Search</Text>,
            tabBarIcon: ({ color }) => <SearchIC name="search" size={20} color={color} />,
          })}
          name="Search" component={Search}
        />
        <Tab.Screen
          options={() => ({
            tabBarLabel: ({ color }) => <Text style={{...Styles.textStyle,color:color}} >TMDB</Text>,
            tabBarIcon: ({ color }) => <MoviesIC name="account-box" size={22} color={color} />,
          })}
          name="TMDB" component={TMDB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

