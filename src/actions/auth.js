import { firebase, facebookAuthProvider, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const link = (user) => ({
    type: 'LINK',
    user
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startFacebookLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(result => console.log(result))
            .catch(err => {
                const credential = err.credential
                const email = err.email;
                if (err.code === 'auth/account-exists-with-different-credential') {
                    dispatch(link({
                        credential,
                        email,
                    }))
                }
            });
    }
}

export const startLink = () => {
    return (dispatch, getState) => {
        const credential = getState().auth.user.credential;
        return firebase.auth().signInWithPopup(googleAuthProvider)
            .then(result => {
                result.user.linkAndRetrieveDataWithCredential(credential).then(data => console.log(data));
            });
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}