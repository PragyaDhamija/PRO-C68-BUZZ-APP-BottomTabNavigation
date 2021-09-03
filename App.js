import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import FaceBookScreen from './screens/FaceBookScreen';
import InstagramScreen from './screens/InstagramScreen';

export default class App extends React.Component{
    render(){
        return(
          <SafeAreaProvider>
            <View style={styles.container}>
                <Header centerComponent={{text:'BuzzApp',style:{fontWeight:'bold',fontSize:25,color:'#CC00CC', fontFamily: "Times New Roman"}}} backgroundColor={'yellow'}/>
                <AppContainer/>
            </View>
            </SafeAreaProvider>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    Facebook:{screen:FaceBookScreen},
    Instagram:{screen:InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5CC',
  },
});
