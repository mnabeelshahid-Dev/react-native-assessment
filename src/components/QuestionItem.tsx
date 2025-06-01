import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '@theme/themes/Colors';

interface QuestionItemProps {
    question: { id: number; label: string; options: { key: string; label: string; score: number }[] };
    selectedOption: string | undefined;
    onOptionChange: (optionKey: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, selectedOption, onOptionChange }) => (
    <View style={styles.questionContainer} key={question.id}>
        <Text style={[styles.questionText, { marginBottom: 10 }]}>{question.label}</Text>
        {question.options.map((option) => (
            <TouchableOpacity
                key={option.key}
                style={[styles.button, { backgroundColor: selectedOption === option.key ? colors.primaryColor : colors.white }]}
                onPress={() => onOptionChange(option.key)}
            >
                <Text style={[styles.questionText, { color: selectedOption === option.key ? colors.white : colors.black }]}>
                    {option.label}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
     questionContainer: {
      justifyContent: 'center',
      paddingHorizontal: 5,
      marginHorizontal: 15,
      paddingTop: 15,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 7,
      paddingVertical: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.primaryColor,
    },
    questionText: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  });




export default QuestionItem;
