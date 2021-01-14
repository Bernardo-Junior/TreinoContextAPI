import React, { useState ,createContext, useEffect } from 'react';

import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as auth from '../services/login';

interface IUser {
  nome: string;
  email: string;
}


interface IAuthContext {
  signed: boolean;
  loading: boolean;
  user: IUser | null;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@auth:user');
      const storageToken = await AsyncStorage.getItem('@auth:token');

      if(storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }else {
        setLoading(false);
      }
    }
    loadStorageData();
  }, [])

  async function signIn() {
    const res = auth.singIn();

    const { token, userData } = res;


    if(token && userData) {
     

      try {
        await AsyncStorage.multiSet([
          ['@auth:user', JSON.stringify(userData)],
          ['@auth:token', token]
        ]);

        setUser(userData);
      } catch(error) {
        Alert.alert('Erro ao logar', 'Ocorreu um erro imprevisto, por favor, tente novamente');
      }
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{signed: !!user, loading, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
};


export default AuthContext;