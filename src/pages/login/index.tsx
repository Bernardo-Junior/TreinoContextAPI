import React, { useContext } from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';

import AuthContext from '../../contexts/Auth';

const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  return (
    <View>
      <Text>Hello World Login</Text>
      <Button title="Entrar" onPress={() =>{signIn()}}/>
    </View>
  )
}

export default Login;