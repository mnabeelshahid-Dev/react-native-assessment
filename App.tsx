import React from 'react';
import Toast from 'react-native-toast-message'
import StoreProvider from './src/redux/provider';
import ApplicationNavigator from './src/navigation/Navigation';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <ApplicationNavigator />
      <Toast />
    </StoreProvider>
  );
};

export default App;
