import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { scaleFontSize, verticalScale } from '../../../assets/scaling';

const Input = ({
    keyboardType = 'default',
    placeholder = '',
    label = '',
    onChangeText = () => {},
    secureTextEntry = false,
}) => {

    const [value, setValue] = useState('');

    return (
        <View>
            <Text style={style.label}>{label}</Text>
            <TextInput
                placeholder={placeholder ? placeholder : null}
                style={style.input}
                value={value} 
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ? keyboardType : 'default'}
                onChangeText={val => { 
                    setValue(val);
                    onChangeText(val);
                }} 
            />
        </View>
    );
}

const style = StyleSheet.create({
    label: {
        fontFamily: 'Inter',
        fontWeight: '400',
        color: '#36455A',
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(15),
    },
    input: {
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(167, 167, 167, 0.5)',
        color: '#000000',
    },
});

export default Input;