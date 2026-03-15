import React from "react"
import {View,Text,Image,TouchableOpacity,StyleSheet} from "react-native"

export default function ProductCard({item,onPress}){

return(

<TouchableOpacity style={styles.card} onPress={onPress}>

<Image source={{uri:item.thumbnail}} style={styles.image}/>

<Text style={styles.title} numberOfLines={2}>
{item.title}
</Text>

<Text style={styles.price}>
$ {item.price}
</Text>

</TouchableOpacity>

)

}

const styles=StyleSheet.create({

card:{
flex:1,
margin:8,
backgroundColor:"#fff",
borderRadius:10,
padding:10,
elevation:2
},

image:{
width:"100%",
height:120,
resizeMode:"contain"
},

title:{
fontSize:14,
marginTop:6
},

price:{
marginTop:4,
fontWeight:"bold",
color:"#16a34a"
}

})