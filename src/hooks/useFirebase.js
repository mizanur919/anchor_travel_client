import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Google Sign In
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // Google LogOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  // Save user
  const saveUser = (email, displayName, callMethod) => {
    const user = { email, displayName };
    fetch("https://evening-cliffs-29156.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Register User using email and password
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email, displayName: name };
        setUser(newUser);
        // Save user
        saveUser(email, name, "POST");
        // Send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        history.replace("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  // SignIn using email and password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    registerUser,
    loginUser,
    signInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
