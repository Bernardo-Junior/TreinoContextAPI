import React, { useContext } from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';

import AuthContext from '../../contexts/Auth';


const Home: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);
  return (
    <View>
      <Text>Hello World Home</Text>
      <Text>{user?.email}</Text>
      <Button title="Sair" onPress={() => {signOut()}} />
    </View>
  )
};

export default Home;