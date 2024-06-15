import React, { useEffect, useRef } from "react";
import { AppState } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/redux/store";
import { checkToken } from "./src/api/user";

const App = () => {

    const appState = useRef(AppState.currentState);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', async (nextAppState) => {
            if(appState.current.match(/inactive|background/) && nextAppState === 'active') {
                //user is coming from the background to the foreground
                console.log('You have come back to the App.')
                await checkToken();
            }
            appState.current = nextAppState;
        });
        checkToken();
        console.log('Application has rendered');
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <NavigationContainer>
                    <RootNavigation />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;