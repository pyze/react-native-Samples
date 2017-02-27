import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    Button,
    Linking
} from 'react-native';

import{
    Actions
} from 'react-native-router-flux';

import{
    Pyze
} from 'pyze-sdk-react-native';
class Home extends React.Component{
    render(){
        return (
            <View>
                <Text style ={styles.title}>
                    Pyze Sample App
                </Text> 
                <View style = {styles.button}>
                <Button title='Pyze Events' onPress={()=> this.openEventsScene() }  />
                </View>
                <View style = {styles.button}>
                <Button title='About Pyze' onPress={()=> this.openAboutPyzeUrl() }  />
                </View>
                <View style = {styles.button}>
                <Button title='Show Unread Messages' onPress={()=> this.showUnreadInAppMessages() }  />
                </View>
                <View style = {styles.button}>
                <Button title='Show All Messages' onPress={()=> this.showAllMessages() } />
                </View>
            </View>
        );
    }

    openEventsScene(){
        Actions.events({
        });
    }

    openAboutPyzeUrl(){
        Linking.openURL("https://pyze.com/");
    }

    showUnreadInAppMessages(){
        Pyze.showInAppNotification(function(param){
            alert(param);
        });
        // alert("Showing Unread In App");
        
    }

    showAllMessages(){
        Pyze.showInAppNotificatonWithCustomAttributes("PyzeInAppTypeAll","#303030",function(param){
            alert(param);
        });
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

export default Home;