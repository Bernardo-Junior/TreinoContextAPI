import React from 'react';

import Routes from './routes';

import { AuthProvider } from './contexts/Auth';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App;