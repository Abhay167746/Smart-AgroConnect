import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // Stores current user
  const [loading, setLoading] = useState(true); // Prevents flicker

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook to use context
export const useAuth = () => useContext(AuthContext);
