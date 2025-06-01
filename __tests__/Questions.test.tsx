import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Questions from '@screens/questions/Questions';


jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

jest.mock('@redux/reducers/QuestionsReducer', () => ({
  submitAnswers: jest.fn((payload) => ({ type: 'SUBMIT_ANSWERS', payload })),
}));

jest.mock('@navigation/NavigationServices', () => ({
  resetActions: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('@utils/helpers/Data', () => ({
  QUESTIONS: [
    { id: 0, options: [{ key: 'a', score: 1 }, { key: 'b', score: 0 }] },
    { id: 1, options: [{ key: 'a', score: 1 }, { key: 'b', score: 0 }] },
  ],
}));

jest.mock('@components/QuestionItem', () => (props: any) => {
  return (
    <button
      testID={props.testID}
      onClick={() => props.onOptionChange('a')}
    >
      Question {props.question.id}
    </button>
  );
});

// Mock Button component as a simple button
jest.mock('@components/Button', () => (props: any) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onPress}
      testID={props.testID}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.title}
    </button>
  );
});

describe('Questions Component', () => {
  const { useDispatch } = require('react-redux');
  const Toast = require('react-native-toast-message');
  const { resetActions } = require('@navigation/NavigationServices');
  const { submitAnswers } = require('@redux/reducers/QuestionsReducer');

  const dispatchMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    dispatchMock.mockClear();
    Toast.show.mockClear();
    resetActions.mockClear();
    submitAnswers.mockClear();
  });

  it('renders correctly with header and progress', () => {
    const { getByTestId } = render(<Questions />);
    expect(getByTestId('questions-screen')).toBeTruthy();
    expect(getByTestId('header-text').props.children).toBe('Questions');
    expect(getByTestId('progress-text').props.children.join('')).toBe('1/2');
  });

  it('back button disabled on first slide', () => {
    const { getByTestId } = render(<Questions />);
    const backButton = getByTestId('back-button');
    expect(backButton.props.disabled).toBe(true);
  });

  it('shows error toast if Next pressed without selecting option for next question', () => {
    const { getByTestId } = render(<Questions />);
    const nextButton = getByTestId('next-button');

    act(() => {
      fireEvent.press(nextButton);
    });

    expect(Toast.show).toHaveBeenCalledWith(expect.objectContaining({
      type: 'error',
      text1: 'Selection Required',
    }));
  });


  
  it('does not move to next slide if option for next question is not selected', () => {
    const { getByTestId } = render(<Questions />);
    const nextButton = getByTestId('next-button');

    act(() => {
      fireEvent.press(nextButton);
    });

    expect(Toast.show).toHaveBeenCalledTimes(1);
    expect(Toast.show).toHaveBeenCalledWith(expect.objectContaining({ type: 'error' }));
  });


  it('does not allow pressing Back on first slide', () => {
    const { getByTestId } = render(<Questions />);
    const backButton = getByTestId('back-button');

    expect(backButton.props.disabled).toBe(true);

    act(() => {
      fireEvent.press(backButton);
    });

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(resetActions).not.toHaveBeenCalled();
    expect(Toast.show).not.toHaveBeenCalled();
  });

  


  
});
