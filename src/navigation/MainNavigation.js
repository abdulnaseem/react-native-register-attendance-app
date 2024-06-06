import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/login";
import Register from "../screens/register/register";
import { Routes } from './Routes';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ header: () => null, headerShow: false }}
            initialRouteName={Routes.Login}>
            
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.Registration} component={Register} />

        </Stack.Navigator>
    )
}

export default MainNavigation;