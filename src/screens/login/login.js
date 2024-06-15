import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Button from '../../components/button/button';
import { Routes } from '../../navigation/Routes';
import { horizontalScale, verticalScale, scaleFontSize } from '../../../assets/scaling';
import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import { logIn, resetToInitialState } from '../../redux/reducers/User';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    //dispatch(resetToInitialState());
    return (
      <View style={[styles.container, {flexDirection: 'column'}]}>

        <View style={[styles.title]}>
          <Text style={[styles.montserratandbold]}>Tahawi Institute</Text>
          <Text style={[styles.montserratandbold]}>Portal</Text>
        </View>

        <View style={{flex: 2, justifyContent: 'flex-start'}}>
          <TextInput style={[styles.input]} placeholder='email' placeholderTextColor="#003f5c" onChangeText={(text) => setEmail(text)} />
          <TextInput style={[styles.input]} placeholder='password' placeholderTextColor="#003f5c" onChangeText={(text) => setPassword(text)} />
          {error.length > 0 ? <Text style={styles.error}>{error}</Text> : <Text></Text>}
        </View>
            
        <View>
          <Button title='Login' 
                  onPress={async () => {
                    let user = await loginUser(email, password);
                    console.log('User Data: ' + user);
                    if(!user.status) {
                      setError(user.error);
                    }
                    else {
                      setError('');
                      dispatch(logIn(user));
                      navigation.navigate(Routes.Home);
                    }
          }} />
        </View>

        <View style={{marginTop: 15}}>
          <Button title='Register Here' onPress={() => navigation.navigate(Routes.Registration)} />
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
    marginTop: 30
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
  },
  error: {
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
    marginLeft: horizontalScale(20)
  },
  success: {
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginBottom: verticalScale(24)
  }
});

export default Login;