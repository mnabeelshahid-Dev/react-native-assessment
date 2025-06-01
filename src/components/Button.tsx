import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '@theme/themes/Colors';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  backgroundColor?: string;
}

const Button = ({ title,onPress,disabled,backgroundColor}: ButtonProps) => {

  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:backgroundColor ? backgroundColor : colors.primaryColor}]} onPress={onPress} disabled={disabled}>
    <Text style={styles.buttonText}>
        {title}
    </Text>
   </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width:'45%',
        borderRadius: 20,
    },
    buttonText:{
        fontSize: 18,
        color: colors.white,
    }
});

export default Button;
