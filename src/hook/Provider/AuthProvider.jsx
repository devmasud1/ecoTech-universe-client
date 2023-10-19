import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [passwordErrMsg, setPasswordErrMsg] = useState([]);

  const createUser = (email, password, name) => {
    setLoading(true);
    if (password.length <= 6) {
      return setPasswordErrMsg("Password must be at least 6 characters.");
    }

    if (!/[A-Z]/.test(password)) {
      return setPasswordErrMsg("Password at least one capital letter.");
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return setPasswordErrMsg("Password at least one special character.");
    }
    setPasswordErrMsg("");
    return createUserWithEmailAndPassword(auth, email, password, name).then(
      () => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
    );
  };
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  });

  const userInfo = {
    loading,
    user,
    createUser,
    logInUser,
    GoogleLogIn,
    logOutUser,
    passwordErrMsg,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
