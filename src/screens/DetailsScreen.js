import React,{useEffect,useState} from "react"
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity} from "react-native"
import api from "../services/api"

export default function DetailsScreen({route,navigation}){

const{id}=route.params
const[product,setProduct]=useState(null)

useEffect(()=>{

api.get(`/products/${id}`)
.then(res=>setProduct(res.data))

},[])

if(!product) return null

return(

<ScrollView style={styles.container}>

<TouchableOpacity
style={styles.back}
onPress={()=>navigation.goBack()}
>

<Text style={styles.backText}>
Voltar
</Text>

</TouchableOpacity>

<Image source={{uri:product.thumbnail}} style={styles.image}/>

<Text style={styles.title}>
{product.title}
</Text>

<Text style={styles.price}>
$ {product.price}
</Text>

<Text style={styles.discount}>
Desconto: {product.discountPercentage}%
</Text>

<Text style={styles.desc}>
{product.description}
</Text>

</ScrollView>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:"#fff"
},

back:{
marginBottom:10
},

backText:{
color:"#2563eb",
fontWeight:"bold"
},

image:{
width:"100%",
height:260,
resizeMode:"contain"
},

title:{
fontSize:22,
fontWeight:"bold",
marginTop:10
},

price:{
fontSize:20,
color:"#16a34a",
marginTop:6
},

discount:{
marginTop:4
},

desc:{
marginTop:12,
fontSize:16
}

})