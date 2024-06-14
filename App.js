import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/redux/store";

const App = () => {

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