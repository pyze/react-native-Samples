import React from 'react';

import{
    View,
    Text,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';

import{
    PyzeEvents
} from 'pyze-sdk-react-native';

class Events extends React.Component{
    state={
        eventName: ''
    }
    render(){
        return (
            <View>
                <Text style={styles.title} >
                    Post Custom Event
                </Text>
                <View style = {styles.button}>
                <TextInput style={{width: 300, height: 50}}  placeholder='Custom Event Name' onChangeText={(text)=> this.setState({
                        eventName: text
                    })} value = {this.state.eventName} />
                </View>
                <View style = {styles.button}>
                <Button title='Post Custom Event' onPress={()=> this.postEvent() } />
                </View>
            </View>
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

export default Events;