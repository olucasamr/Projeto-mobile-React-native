import React,{useEffect,useState} from "react"
import {FlatList,ActivityIndicator,View} from "react-native"
import api from "../services/api"
import ProductCard from "../components/ProductCard"

export default function MaleScreen({navigation}){

const[data,setData]=useState([])
const[loading,setLoading]=useState(true)

useEffect(()=>{

Promise.all([
api.get("/products/category/mens-shirts"),
api.get("/products/category/mens-shoes"),
api.get("/products/category/mens-watches")
]).then(res=>{

const products=[
...res[0].data.products,
...res[1].data.products,
...res[2].data.products
]

setData(products)
setLoading(false)

})

},[])

if(loading){

return(
<View style={{flex:1,justifyContent:"center"}}>
<ActivityIndicator size="large"/>
</View>
)

}

return(

<FlatList
data={data}
numColumns={2}
key={2}
contentContainerStyle={{padding:10}}
columnWrapperStyle={{justifyContent:"space-between"}}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(

<ProductCard
item={item}
onPress={()=>navigation.navigate("Details",{id:item.id})}
/>

)}
/>

)

}