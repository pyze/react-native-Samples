import React from 'react';

import{
    View,
    Text,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import Home from './components/Home'
import Events from './components/Events'
import {
    StackNavigator,
  } from 'react-navigation';

  const StackNavigation = StackNavigator({
    Home: { screen: Home },
    Events: { screen: Events },
  });

import{
    PyzeEvents
} from 'pyze-sdk-react-native';

import{
    Platform
} from 'react-native';

class App extends React.Component{
    state={
        eventName: ''
    }
    render(){
        return(
           <StackNavigation />
        );
    }
    postEvent(){
        alert("Posted " + this.state.eventName);
        PyzeEvents.postCustomEvent(this.state.eventName);
    }
}


var styles = StyleSheet.create({
    title:{
        marginTop : 20,
        marginLeft : 20,
        marginBottom: 20,
        fontSize  : 20,
        fontWeight : 'bold',
        textAlign: 'center'
    },
    button:{
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10
    }
});

export default App;