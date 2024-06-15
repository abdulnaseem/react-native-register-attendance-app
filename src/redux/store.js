// Importing the configureStore function from the Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

// Importing the User reducer from the ./reducers/User file
import User from './reducers/User';

// Creating a rootReducer that combines all reducers in the app

const rootReducer = combineReducers({
  // Here, we're combining the User reducer and calling it "user"
  user: User,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
}

const persistedReducer = persistReducer(configuration, rootReducer);

// Creating a new Redux store using the configureStore function
// We're passing in the rootReducer as the main reducer for the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

// Exporting the store to be used in the app
export default store;

export const persistor = persistStore(store);