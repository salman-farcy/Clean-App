import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //* signUp
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //* singIn
  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  //logOut
  const logOut = () =>{
    setIsLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
      const subscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setIsLoading(false)
      });

      return () =>{
         return subscribe();
      }
  }, [])

  const values = {
    createUser,
    login,
    isLoading,
    user,
    logOut
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
