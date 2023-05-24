import { createContext, useEffect, useState } from 'react';
import { onAuthStateChange } from '../api/firebase';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
