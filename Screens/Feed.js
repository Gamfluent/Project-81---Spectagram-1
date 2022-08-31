import {View, Text} from 'react-native';
import React, {Component} from 'react';

export default class Feed extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Feed</Text>
            </View>
        )
    }
}