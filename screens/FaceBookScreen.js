import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default class FaceBookScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>FaceBook</Text>
                <Image style={styles.logo} source={require('../assets/facebook.png')} />
                <TouchableOpacity style={styles.logIn}>LOG IN</TouchableOpacity>
                <Text style={styles.textO} >OR</Text>
                <TouchableOpacity style={styles.signUp}>SIGN UP</TouchableOpacity>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDF0EA',
    },
    textContainer: {
        alignSelf: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#0000ff',
        fontFamily: 'cursive'
    },
    logo: {
        marginLeft: 200,
        height: 200,
        width: 200,
    },
    logIn: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        marginTop: -170,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,  
        paddingTop:10,  
        borderRadius: 15,
        fontWeight: 'bold', 
        color: 'white',
        fontFamily: 'Georgia'
    },
    textO:{
        alignSelf: 'center',
        justifyContent: 'center',   
        fontWeight: 'bold',     
        marginTop: 20,
        fontSize: 20,
    },
    signUp: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        marginTop: 30,
        paddingLeft: 40,
        paddingRight: 50,
        paddingBottom: 10,  
        paddingTop:10,  
        borderRadius: 15,
        fontWeight: 'bold', 
        color: 'white',
        fontFamily: 'Georgia'
    }
})