import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Pressable, Header} from 'react-native';
import Button from '../../components/button/button';
import { Routes } from '../../navigation/Routes';

const Register = ({navigation}) => {

    const [name, setName] = useState('fullname');
    const [number, setNumber] = useState('mobile number');
    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');
    

    return (
        <View
        style={[
            styles.container,
            {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
            },
        ]}>

            <View style={[styles.title]}>
                <Text style={[styles.montserratandbold]}>Tahawi Institute</Text>
                <Text style={[styles.montserratandbold]}>Portal</Text>
            </View>

            <View style={{flex: 2, justifyContent: 'flex-start'}}>
                <TextInput style={[styles.input]} placeholder={name} placeholderTextColor="#003f5c" onChangeText={(text) => setName} />
                <TextInput style={[styles.input]} placeholder={number} placeholderTextColor="#003f5c" onChangeText={(text) => setNumber} />
                <TextInput style={[styles.input]} placeholder={email} placeholderTextColor="#003f5c" onChangeText={(text) => setEmail} />
                <TextInput style={[styles.input]} placeholder={password} placeholderTextColor="#003f5c" onChangeText={(text) => setPassword} />
            </View>

            <View>
                <Button title='Register Now' onPress={() => navigation.navigate(Routes.Home)} />
            </View>

            <View style={{marginTop: 15}}>
                <Button title='Back' onPress={() => navigation.navigate(Routes.Login)} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#073b4c'
  },
  title: {
    flex: 1, 
    justifyContent: "flex-end", 
    alignItems: "center",
    marginBottom: 50,
    marginTop: -30
  },
  montserratandbold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: 'white',
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 25,
    borderRadius: 35,
    backgroundColor: '#F3F4F4',
    color: 'black',
    placeholderTextColor: "#003f5c"
  },
  registrationButton: {
    alignItems: 'center'
  }
});

export default Register;