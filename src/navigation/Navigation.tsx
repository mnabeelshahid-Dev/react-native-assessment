import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './stacks/AppStack';
import { navigationRef } from './NavigationServices';

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
