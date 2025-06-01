import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from '@screens/result/Result';
import Splash from '@screens/splash/Splash';
import Questions from '@screens/questions/Questions';

type AppNavigatorProps = {};

const AppStack = createNativeStackNavigator();

const AppNavigator: FC<AppNavigatorProps> = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen component={Splash} name="Splash" />
            <AppStack.Screen component={Questions} name="Questions" />
            <AppStack.Screen component={Result} name="Result" />
        </AppStack.Navigator>
    );
};

export default AppNavigator;
