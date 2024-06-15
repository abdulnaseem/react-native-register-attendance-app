import auth from '@react-native-firebase/auth';
import store from '../redux/store';
import { updateToken } from '../redux/reducers/User';

export const registerUser = async (fullName, number, email, password) => {
    try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        await user.user.updateProfile({
            displayName: fullName,
            phoneNumber: number
        });
        //console.log(user);
        return user;
    }
    catch(error) {
        if(error.code === 'auth/email-already-in-use') {
            return {error: 'The email you have entered is already in use.'};
        }
        else if(error.code === 'auth/invalid-email') {
            return {error: 'Please enter a valid email address.'};
        }
        return {error: 'Something went wrong with your request.'};
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await auth().signInWithEmailAndPassword(email, password);
        const token = await response.user.getIdToken();
        console.log(response);
        console.log(token);
        return {
            status: true,
            displayName: response.user.displayName,
            email: response.user.email,
            token,
        }
    }
    catch(error) {
        console.log(error)
        if(error.code === 'auth/wrong-password') {
            return {
                status: false,
                error: 'Please enter the correct password.'
            }
        }
        return {
            status: false,
            error: 'Something went wrong.'
        }
    }
}

export const logoutUser = async () => {
    await auth().signOut();
}

export const checkToken = async () => {
    try{
        let response = await auth().currentUser.getIdToken(true);
        console.log('We are updating token for you.')
        store.dispatch(updateToken(response));
        return response;
    }
    catch(error) {
        return error;
    }
}