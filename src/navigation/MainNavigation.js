import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from './Routes';
import Login from "../screens/login/login";
import Register from "../screens/register/register";
import Home from "../screens/home/home";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ header: () => null, headerShow: false }}
            initialRouteName={Routes.Login}>
            
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.Registration} component={Register} />
            <Stack.Screen name={Routes.Home} component={Home} />

        </Stack.Navigator>
    )
}

export default MainNavigation;