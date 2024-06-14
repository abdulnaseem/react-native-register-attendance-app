import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import Button from '../../components/button/button';
import BackButton from '../../components/backbutton/backButton';
import { Routes } from '../../navigation/Routes';
import { registerUser } from '../../api/user';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../assets/scaling';
import globalStyle from '../../../assets/globalStyle';
import Input from '../../components/input/input';

const Register = ({navigation}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    // const [emailValidation, setEmailValidation] = useState(true);

    // const validateEmail = async (email) => {
    //   console.log(email);
    //   const regex = '^[a-zA-Z0-9]+@tahawi.com$';
    //   const found = await email.match(regex);

    //   if(found[0] !== email){
    //     console.log(true);
    //     setEmailValidation(true);
    //   }
    //   else {
    //     console.log(false);
    //     setEmailValidation(false);
    //   }
    // }

    const registerUsers = async () => {
      let user = await registerUser(name, number, email, password)
      console.log(user);
      if(user.error) {
        setError(user.error);
      }
      else {
        setError('');
        setSuccess('You have successfully registered.');
        setTimeout(() => navigation.goBack(), 3000);
      }
    }

    return (
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <View style={styles.backButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <ScrollView style={[styles.containerTwos]} keyboardShouldPersistTaps={'always'}>
          
          {/* <View
            style={[
                styles.container,
                {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column',
                },
          ]}> */}

              <View style={[styles.title]}>
                  <Text style={[styles.montserratandbold, {marginTop: 80,}]}>Registration</Text>
              </View>

              <View style={{flex: 2, justifyContent: 'flex-start', marginLeft: 15, marginRight: 15}}>
                  {/* <TextInput style={[styles.input]} value={name} placeholder='fullname' placeholderTextColor="#003f5c" onChangeText={(value) => {setName(value)}} />
                  <TextInput style={[styles.input]} keyboardType='numeric' value={number} placeholder='mobile number' placeholderTextColor="#003f5c" onChangeText={(value) => setNumber(value)} />
                  <TextInput style={[styles.input]} keyboardType='email-address' value={email} placeholder='email' placeholderTextColor="#003f5c" onChangeText={(value) => setEmail(value)} />
                  <TextInput style={[styles.input]} secureTextEntry={true} value={password} placeholder='password' placeholderTextColor="#003f5c" onChangeText={(value) => setPassword(value)} /> */}
                  
                  <View style={{marginBottom: 15}}>
                    <Input
                      label={'Fullname'}
                      placeholder={'Enter your full name...'}
                      onChangeText={value => setName(value)}
                    />
                  </View>
                  
                  <View style={{marginBottom: 15}}>
                    <Input
                      label={'Contact Number'}
                      placeholder={'Enter your number...'}
                      onChangeText={value => setNumber(value)}
                    />
                  </View>

                  <View style={{marginBottom: 15}}>  
                    <Input
                      keyboardType={'email-address'}
                      label={'Email'}
                      placeholder={'Enter your email...'}
                      onChangeText={value => {
                        setEmail(value)
                      }}
                    />
                  </View>
                  
                  <View style={{marginBottom: 15}}>
                    <Input
                      secureTextEntry={true}
                      label={'Password'}
                      placeholder={'******'}
                      onChangeText={value => setPassword(value)}
                    />
                  </View>
              </View>

              {error.length > 0 ? <Text style={[styles.registerStatus, {color: '#FF0000'}]}>{error}</Text> : 
                                  <Text style={[styles.registerStatus, {color: '#28a745'}]}>{success}</Text>}
              {/* {success.length > 0 ? <Text style={styles.success}>{success}</Text> : <Text></Text>} */}

              <View style={[styles.registrationButton, {marginBottom: 15}]}>
                  <Button title='Register Now' 
                          isDisabled={name.length <= 2 || email.length <=5 || password.length <= 8}
                          onPress={registerUsers} />
              </View>

          {/* </View> */}
        </ScrollView>
      </SafeAreaView> 
        
    );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 20,
    backgroundColor: '#073b4c'
  },
  title: {
    // flex: 1, 
    justifyContent: "flex-end", 
    alignItems: "center",
    marginBottom: 50,
    marginTop: -30
  },
  montserratandbold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: 'black',
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
    marginLeft: 8,
    marginRight: 8,
    marginTop: 10,
  },
  containerTwo: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  registerStatus: {
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
    marginLeft: horizontalScale(20),
    marginLeft: 15
  },
  success: {
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginBottom: verticalScale(24),
    marginTop: -30,
    marginLeft: 15
  }
});

export default Register;