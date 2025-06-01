import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { resetActions } from '../../navigation/NavigationServices';
import styles from './Styles';
import CircularText from './CircularText';

interface Props {
  testID?: string;
}

const Splash: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      resetActions('Questions');
    }, 5000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim]);

  return (
    <View style={styles.container} testID="splash-screen">
    <CircularText testID="circular-text" />
  </View>
  );
};

export default Splash;
