import React,{useState} from "react"
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Dimensions} from "react-native"
import {useDispatch} from "react-redux"
import {login} from "../store/userSlice"

const width=Dimensions.get("window").width

export default function LoginScreen({navigation}){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[error,setError]=useState("")

const dispatch=useDispatch()

const demoUser={
email:"admin@loja.com",
password:"123456"
}

function validate(){

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailRegex.test(email)){
setError("Digite um email válido")
return false
}

if(password.length<6){
setError("Senha deve ter pelo menos 6 caracteres")
return false
}

return true
}

function handleLogin(){

setError("")

if(!validate()) return

if(email!==demoUser.email || password!==demoUser.password){
setError("Email ou senha incorretos")
return
}

dispatch(login(email))
navigation.replace("Home")

}

return(

<View style={styles.container}>

<View style={styles.card}>

<Text style={styles.title}>Login</Text>

<TextInput
placeholder="Email"
keyboardType="email-address"
autoCapitalize="none"
style={styles.input}
value={email}
onChangeText={setEmail}
/>

<TextInput
placeholder="Senha"
secureTextEntry
style={styles.input}
value={password}
onChangeText={setPassword}
/>

{error!=="" && <Text style={styles.error}>{error}</Text>}

<TouchableOpacity style={styles.button} onPress={handleLogin}>
<Text style={styles.buttonText}>Entrar</Text>
</TouchableOpacity>

<Text style={styles.helper}>
Usuário de teste: admin@loja.com / 123456
</Text>

</View>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#f4f6f8"
},

card:{
width:width>600?400:"90%",
backgroundColor:"#fff",
padding:25,
borderRadius:12,
elevation:4
},

title:{
fontSize:26,
fontWeight:"bold",
marginBottom:20,
textAlign:"center"
},

input:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:8,
marginBottom:12
},

button:{
backgroundColor:"#2563eb",
padding:14,
borderRadius:8
},

buttonText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold"
},

error:{
color:"red",
marginBottom:10,
textAlign:"center"
},

helper:{
marginTop:12,
fontSize:12,
color:"#666",
textAlign:"center"
}

})