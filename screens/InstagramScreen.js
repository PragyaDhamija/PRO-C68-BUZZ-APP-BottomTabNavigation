import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class InstaScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={{alignSelf:'center',fontSize:60,fontWeight:'bold',marginTop:15,color:'#FF6701', fontFamily: 'cursive'}}>Instagram</Text>
                <Image style={styles.logo} source={require('../assets/phone.png')} />
            <View>
                <TextInput style={styles.inputBox}  placeholder = "Phone number, username, or email"/>
                <TextInput style={styles.inputBox2}  placeholder = "Password"/>
                <TouchableOpacity style={styles.text}>Log In</TouchableOpacity>
                <Text style={{alignSelf: 'center', textAlign: 'center', marginTop: 50}}>Don't have an account?<Text style={{fontWeight: 'bold', color: '#3399FF'}}>    Sign Up</Text></Text>
            </View>
            
            </View>
        )
    }

}

const styles = StyleSheet.create({
    logo: {
        marginLeft: 200,
        height: 350,
        width: 200,
    },
    inputBox: {
        marginTop: -300,
        backgroundColor: '#E0E0E0',
        width: "20%",
        alignSelf: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        height: 40
      },
      inputBox2: {
        marginTop: 10,
        backgroundColor: '#E0E0E0',
        width: "20%",
        alignSelf: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        height: 40
      },
      text:{
        backgroundColor: '#66B2FF',
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 15,   
        marginTop: 20,  
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 50,
        paddingRight: 50,
        color: 'white',
      }

})