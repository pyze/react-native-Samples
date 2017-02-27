import React from 'react';

import Home from './components/Home';
import Events from './components/Events';

import {
    Router,
    Scene
} from 'react-native-router-flux';

import{
    Platform
} from 'react-native';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Scene key="root" style={{paddingTop:Platform.OS == 'ios'?64:54}}>
                    <Scene key='home' component={Home} title='Home' />
                    <Scene key='events' component={Events} title='Events' />
                </Scene>
            </Router>
        );
    }
}

export default App;