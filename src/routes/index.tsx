import React, { useContext } from 'react';

import { View, ActivityIndicator } from 'react-native';

import Home from '../pages/home';
import Login from '../pages/login';

import AuthContext from '../contexts/Auth';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' color="#666" />
      </View>
    )
  }



  return signed ? <Home /> : <Login />
};

export default Routes;