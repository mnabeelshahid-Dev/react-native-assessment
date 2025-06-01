import React, { useRef, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { QUESTIONS } from '@utils/helpers/Data';
import { submitAnswers } from '@redux/reducers/QuestionsReducer';
import colors from '@theme/themes/Colors';
import Strings from '@theme/strings/Strings';
import Button from '@components/Button';
import Toast from 'react-native-toast-message';
import styles from './Styles';
import QuestionItem from '@components/QuestionItem';
import { resetActions } from '@navigation/NavigationServices';

const Questions: React.FC = () => {
    const carouselReference = useRef<any>(null);
    const dispatch = useDispatch();
    const { width } = Dimensions.get('window');
    const [responses, setResponses] = useState<{ [key: number]: string }>({});
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const handleOptionChange = (questionId: number, optionKey: string) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: optionKey,
        }));
    };

    const renderItem = ({ item }: { item: typeof QUESTIONS[number] }) => (
        <QuestionItem
            question={item}
            selectedOption={responses[item.id]}
            onOptionChange={(optionKey) => handleOptionChange(item.id, optionKey)}
            testID={`question-item-${item.id}`}
        />
    );

    const onPressNext = () => {
        if (!responses[activeSlide + 1]) {
            showErrorToast();
            return;
        }
        carouselReference.current?.snapToNext();
    };

    const onPressBack = () => {
        carouselReference.current?.snapToPrev();
    };

    const onPressShowResults = () => {
        if (activeSlide === QUESTIONS.length - 1) {
            if (!responses[activeSlide + 1]) {
                showErrorToast();
                return;
            }
            const results = QUESTIONS.map((q) => ({
                id: q.id,
                score: q.options.find((opt) => opt.key === responses[q.id])?.score || 0,
            }));
            dispatch(submitAnswers(results));
            resetActions('Result');
        }
    };

    const showErrorToast = () => {
        return Toast.show({
            type: 'error',
            text1: 'Selection Required',
            text2: 'Please select an option before proceeding',
            position: 'top',
            visibilityTime: 2500,
            autoHide: true,
            topOffset: 70,
        });
    };

    return (
        <View style={styles.container} testID="questions-screen">
            <View style={styles.headerView}>
                <Text style={styles.headerText} testID="header-text">
                    Questions
                </Text>
            </View>

            <View style={styles.questionProgressView}>
                <View style={styles.questionProgressCircle}>
                    <Text style={styles.numberText} testID="progress-text">
                        {activeSlide + 1}/{QUESTIONS.length}
                    </Text>
                </View>
            </View>

            <View style={styles.carouselView}>
                <Carousel
                    ref={carouselReference}
                    layout={'default'}
                    data={QUESTIONS}
                    sliderWidth={width}
                    itemWidth={width}
                    renderItem={renderItem}
                    lockScrollWhileSnapping={true}
                    scrollEnabled={false}
                    useScrollView={true}
                    onSnapToItem={(index: number) => setActiveSlide(index)}
                    testID="questions-carousel"
                />
            </View>

            <View style={styles.buttonContainer}>
                {activeSlide === QUESTIONS.length - 1 ? (
                    <Button
                        title={Strings.SHOW_RESULTS}
                        onPress={onPressShowResults}
                        testID="show-results-button"
                    />
                ) : (
                    <>
                        <Button
                            title={Strings.BACK}
                            onPress={onPressBack}
                            disabled={activeSlide === 0}
                            backgroundColor={activeSlide === 0 ? colors.disabledColor : colors.primaryColor}
                            testID="back-button"
                        />
                        <Button title={Strings.NEXT} onPress={onPressNext} testID="next-button" />
                    </>
                )}
            </View>
        </View>
    );
};

export default Questions;
