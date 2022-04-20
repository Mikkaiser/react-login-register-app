import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../styles/MainStyle';


export default () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [cpf, setCPF] = useState(null);
    const [phone, setPhone] = useState(null);

    const [isSelected, setSelected] = useState(false);

    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorCpf, setErrorCpf] = useState(null);
    const [errorPhone, setErrorPhone] = useState(null);


    const save = () => {
        console.warn('saved');
    }

    const fieldsAreValid = () => {
        let error = false;

        setErrorEmail(null);
        setErrorPassword(null);
        setErrorName(null);
        setErrorCpf(null);
        setErrorPhone(null);

        if(email == null) {
            setErrorEmail('Fill your email field ')
            error = true;
        }
        if(cpf == null) {
            setErrorCpf('Fill your CPF field ')
            error = true;
        }
        if(name == null) {
            setErrorName('Fill your Name field ')
            error = true;
        }
        if(password == null) {
            setErrorPassword('Fill your Password field ')
            error = true;
        }
        if(phone == null) {
            setErrorPhone('Fill your Phone field ')
            error = true;
        }

        return !error;
    }

    return (
        <View style={Style.container}>
          <Text h3>Sign Up</Text>

          <Input
            placeholder='Name'
            keyboardType='default'
            onChangeText={value => setName(value)}
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            errorMessage={errorName}
          />

          <Input 
            placeholder='Email'
            keyboardType='email-address'
            onChangeText={value => setEmail(value)}
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            errorMessage={errorEmail}
          />

          <Input
            placeholder='Password'
            onChangeText={value => setPassword(value)}
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            secureTextEntry={true}
            errorMessage={errorPassword}
          />

          <Input
            placeholder='CPF'
            keyboardType='number-pad'
            onChangeText={value => setCPF(value)}
            leftIcon={{ type: 'font-awesome', name: 'address-card' }}
            returnKeyType="done"
            errorMessage={errorCpf}
          />

          <Input
            placeholder='Phone'
            keyboardType='phone-pad'
            onChangeText={value => setPhone(value)}
            leftIcon={{ type: 'font-awesome', name: 'phone' }}
            returnKeyType="done"
            errorMessage={errorPhone}
          />


          <CheckBox
            title='I accept the use terms'
            checkedIcon='check'
            uncheckedIcon='square-o'
            checkedColor="green"
            uncheckedColor="red"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
          />

          <Button
            icon={
              <Icon
                name='check'
                size={15}
                color='white'
              />
            }
            title=' Save'                  
            buttonStyle={[style.buttonStyle, style.greenButton]}
            onPress={fieldsAreValid}
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