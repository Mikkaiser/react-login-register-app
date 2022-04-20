import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../styles/MainStyle';


export default ({navigation}) => {

    const [email, setEmail] = useState(null); 
    const [password, setPassword] = useState(null);
  
  
    const send = () => {
      navigation.reset({
          index: '0',
          routes: [{name: 'Home'}]
      })
    }

    const signUp = () => {
      navigation.navigate('Register');
    }
  
    return (
      <View style={Style.container}>
        <Text h3>Login</Text>
        <Input 
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={value => setEmail(value)}
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
  
        <Input
          placeholder='Password'
          keyboardType='default'
          onChangeText={value => setPassword(value)}
          leftIcon={{ type: 'font-awesome', name: 'key' }}
          secureTextEntry={true}
        />
  
        <Button
          icon={
            <Icon
              name='check'
              size={15}
              color='white'
            />
          }
          title=' Sign In'
          buttonStyle={style.buttonStyle}
          onPress={send}
        />

        <Button
          icon={
            <Icon
              name='user'
              size={15}
              color='white'
            />
          }
          title=' Sign Up'
          buttonStyle={[style.buttonStyle, style.greenButton]}
          onPress={signUp}
        />
      </View>
    )
  }

  const style = StyleSheet.create({
    buttonStyle: {
      width: 200,
      marginTop: 10,
    },
    greenButton: {
      backgroundColor: '#28BC65'
    }
  })