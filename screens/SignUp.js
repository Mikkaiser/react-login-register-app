import React, {useState} from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Input, Text, Button, CheckBox } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { TextInputMask } from "react-native-masked-text";
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../styles/MainStyle';
import {validateEmail} from './validation/email-regex';


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

    let cpfField = null;
    let phoneField = null;

    const save = () => {
      if(fieldsAreValid()) {
        console.warn('saved');
      }
    }

    const fieldsAreValid = () => {
        let error = false;

        setErrorEmail(null);
        setErrorPassword(null);
        setErrorName(null);
        setErrorCpf(null);
        setErrorPhone(null);

        if(!validateEmail(email)) {
            setErrorEmail('Fill your email field ')
            error = true;
        }
        if(!cpfField.isValid()) {
            setErrorCpf('Fill your cpf field correctly ')
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
        if(!phoneField.isValid()) {
            setErrorPhone('Fill your Phone field correctly ')
            error = true;
        }

        return !error;
    }

    return (
        <KeyboardAvoidingView 
            style={Style.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}  
            keyboardVerticalOffset={140}
        >
          <ScrollView style={{ width: '100%' }}> 
            <Text h3>Sign Up</Text>

            <Input
              placeholder='Name'
              keyboardType='default'
              onChangeText={value => {
                setName(value);
                setErrorName(null);
              }}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              errorMessage={errorName}
            />

<Input
              placeholder='Name'
              keyboardType='default'
              onChangeText={value => {
                setName(value);
                setErrorName(null);
              }}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              errorMessage={errorName}
            />

<Input
              placeholder='Name'
              keyboardType='default'
              onChangeText={value => {
                setName(value);
                setErrorName(null);
              }}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              errorMessage={errorName}
            />

<Input
              placeholder='Name'
              keyboardType='default'
              onChangeText={value => {
                setName(value);
                setErrorName(null);
              }}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              errorMessage={errorName}
            />

<Input
              placeholder='Name'
              keyboardType='default'
              onChangeText={value => {
                setName(value);
                setErrorName(null);
              }}
              leftIcon={{ type: 'font-awesome', name: 'user' }}
              errorMessage={errorName}
            />

            <Input 
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={value => {
                setEmail(value);
                setErrorEmail(null);
              }}
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              errorMessage={errorEmail}
            />

            <Input
              placeholder='Password'
              onChangeText={value => {
                setPassword(value);
                setErrorPassword(null);
              }}
              leftIcon={{ type: 'font-awesome', name: 'key' }}
              secureTextEntry={true}
              errorMessage={errorPassword}
            />

            <View style={style.containerMask}>
              <TextInputMask 
                style={style.maskedInput}
                placeholder="CPF"
                type={'cpf'}
                value={cpf}
                onChangeText={value => {
                  setCPF(value);
                  setErrorCpf(null);
                }}
                leftIcon={{ type: 'font-awesome', name: 'address-card' }}
                returnKeyType="done"
                errorMessage={errorCpf}
                ref={ (ref) => cpfField = ref }
              />
            </View>
            <Text style={style.errorMessage}>{errorCpf}</Text>


            <View style={style.containerMask}>
              <TextInputMask 
                style={style.maskedInput}
                placeholder="Phone"
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) '
                }}
                value={phone}
                onChangeText={value => {
                  setPhone(value);
                  setErrorPhone(null);
                }}
                leftIcon={{ type: 'font-awesome', name: 'phone' }}
                returnKeyType="done"
                ref={ (ref) => phoneField = ref }
              />
            </View>
            <Text style={style.errorMessage}>{errorPhone}</Text>



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
          </ScrollView>
        </KeyboardAvoidingView>
      )
}
const style = StyleSheet.create({
  buttonStyle: {
    width: 200,
    marginTop: 10,
  },
  greenButton: {
    backgroundColor: '#28BC65'
  },
  maskedInput: {
    flex: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'flex-start'
  },
  containerMask: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#f00',
    fontSize: 12
  }
})