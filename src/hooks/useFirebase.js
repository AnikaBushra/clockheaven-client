import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    const auth = getAuth();
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database
                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });



                history.replace('/');
                const user = userCredential.user;

            })
            .catch((error) => {

                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }
    const logInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false);
            return () => unsubscribed;
        });
    }, []);
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://safe-hollows-48990.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        registerUser,
        logOut,
        logInUser,
        isLoading,
        error
    }
}

export default useFirebase;