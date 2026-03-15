import React,{useEffect,useState} from "react"
import {FlatList} from "react-native"
import api from "../services/api"
import ProductCard from "../components/ProductCard"

export default function FemaleScreen({navigation}){

const[data,setData]=useState([])

useEffect(()=>{

Promise.all([
api.get("/products/category/womens-bags"),
api.get("/products/category/womens-dresses"),
api.get("/products/category/womens-jewellery"),
api.get("/products/category/womens-shoes"),
api.get("/products/category/womens-watches")
]).then(res=>{

const products=[
...res[0].data.products,
...res[1].data.products,
...res[2].data.products,
...res[3].data.products,
...res[4].data.products
]

setData(products)

})

},[])

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