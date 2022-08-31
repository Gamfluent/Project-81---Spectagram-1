import {View, Text} from 'react-native';
import React, {Component} from 'react';

export default class CreateStory extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Create Story</Text>
            </View>
        )
    }
}