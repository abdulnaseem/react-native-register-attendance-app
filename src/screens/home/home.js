import React from "react";
import { Text, Pressable, View, Button, Headers } from "react-native";
import { Routes } from "../../navigation/Routes";
import { useDispatch, useSelector } from "react-redux";
import { resetToInitialState } from "../../redux/reducers/User";
import { logoutUser } from "../../api/user";

const Home = ({navigation}) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    console.log('Redux: ' + user.displayName);
    return (
        <View style={{marginTop: 15}}>
            <Text style={{color: 'black'}}>Hello {user.displayName}</Text>
            <Button title='Logout' 
                    onPress={async () => {
                        dispatch(resetToInitialState());
                        await logoutUser();
                    }} />
        </View>
        
    )
}

export default Home;