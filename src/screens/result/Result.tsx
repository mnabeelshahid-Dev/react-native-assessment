import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import Button from '@components/Button';
import { QUESTIONS } from '@utils/helpers/Data';
import { resetSelectedAnswers } from '@redux/reducers/QuestionsReducer';
import styles from './Styles';
import Strings from '@theme/strings/Strings';
import { resetActions } from '@navigation/NavigationServices';

const Result: React.FC = () => {
    const answers = useSelector((state: RootState) => state?.questions?.answers || []);
    const dispatch = useDispatch();
    const [riskProfile, setRiskProfile] = useState<string>('');
    
    const totalScore = answers.reduce((sum: number, answer: any) => sum + answer.score, 0);
    
    useEffect(() => {
      setRiskProfile(checkRiskProfile(totalScore));
  }, [totalScore]); 

    const checkRiskProfile = (score: number): string => {
        const minScore = QUESTIONS.reduce(
            (sum, question) => sum + Math.min(...question.options.map(opt => opt.score)),
            0,
        );

        const maxScore = QUESTIONS.reduce(
            (sum, question) => sum + Math.max(...question.options.map(opt => opt.score)),
            0,
        );

        const lowRisk = minScore + (maxScore - minScore) / 3;
        const mediumRisk = minScore + 2 * (maxScore - minScore) / 3;
    
        if (score <= lowRisk) {
            return 'Low';
        } else if (score <= mediumRisk) {
            return 'Medium';
        } else {
            return 'High';
        }
    };

 

    return (
        <View style={styles.container}>
            <View style={styles.scoreView}>
                <Text style={styles.scoreText}>{totalScore}</Text>
                <Text style={styles.feedbackText}>{riskProfile}</Text> 
            </View>

            <View style={styles.riskDescriptionView}>
                <Text style={styles.descriptionText}>{Strings.RISK_DESCRIPTION}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    title={Strings.START_AGAIN} 
                    onPress={() => {
                        resetActions('Questions');
                        dispatch(resetSelectedAnswers());
                    }} 
                />
            </View>
        </View>
    );
};

export default Result;
