import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(
      `https://city-compters-server-2na6x9urw-naimuddin94.vercel.app/carts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user, setUser]);

  console.log(cart);

  const switchTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const passwordChange = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logOut,
    passwordChange,
    setLoading,
    darkMode,
    switchTheme,
    cart,
    setCart,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
