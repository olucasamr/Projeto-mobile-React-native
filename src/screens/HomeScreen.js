import React from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import MaleScreen from "./MaleScreen"
import FemaleScreen from "./FemaleScreen"
import {View,Button} from "react-native"
import {useDispatch} from "react-redux"
import {logout} from "../store/userSlice"

const Tab=createMaterialTopTabNavigator()

export default function HomeScreen({navigation}){

const dispatch=useDispatch()

function handleLogout(){
dispatch(logout())
navigation.replace("Login")
}

return(

<View style={{flex:1}}>

<View style={{padding:10,alignItems:"flex-end"}}>
<Button title="Logout" onPress={handleLogout}/>
</View>

<Tab.Navigator>

<Tab.Screen
name="Masculino"
component={MaleScreen}
/>

<Tab.Screen
name="Feminino"
component={FemaleScreen}
/>

</Tab.Navigator>

</View>

)

}