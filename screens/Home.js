import React from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import Tabs from './navigation/Tabs';


export default () => {
    return (
        <View style={{ flex: 1 }}>
            <Tabs/>
        </View>
    )
}