import React from "react";
import { Text, Pressable, View, Button } from "react-native";
import { Routes } from "../../navigation/Routes";

const Home = ({navigation}) => {
    return (
        <View style={{marginTop: 15}}>
            <Button title='Logout' onPress={() => navigation.navigate(Routes.Login)} />
        </View>
        
    )
}

export default Home;