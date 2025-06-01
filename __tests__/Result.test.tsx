import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as NavigationServices from '@navigation/NavigationServices';
import { resetSelectedAnswers } from '@redux/reducers/QuestionsReducer';
import Result from '@screens/result/Result';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('@navigation/NavigationServices', () => ({
  resetActions: jest.fn(),
}));

jest.mock('@utils/helpers/Data', () => ({
  QUESTIONS: [
    {
      options: [
        { score: 1 },
        { score: 3 },
      ],
    },
    {
      options: [
        { score: 2 },
        { score: 4 },
      ],
    },
  ],
}));

jest.mock('@components/Button', () => (props: any) => {
  return <button onClick={props.onPress} testID="custom-button">{props.title}</button>;
});

describe('Result Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders total score and correct risk profile: Low', () => {
    (useSelector as jest.Mock).mockReturnValue([
      { score: 1 },
      { score: 2 },
    ]);

    const { getByText } = render(<Result />);
    expect(getByText('3')).toBeTruthy();
    expect(getByText('Low')).toBeTruthy();
  });

  it('renders correct risk profile: Medium', () => {
    (useSelector as jest.Mock).mockReturnValue([
      { score: 3 },
      { score: 2 },
    ]);

    const { getByText } = render(<Result />);
    expect(getByText('5')).toBeTruthy();
    expect(getByText('Medium')).toBeTruthy();
  });

  it('renders correct risk profile: High', () => {
    (useSelector as jest.Mock).mockReturnValue([
      { score: 4 },
      { score: 3 },
    ]);

    const { getByText } = render(<Result />);
    expect(getByText('7')).toBeTruthy();
    expect(getByText('High')).toBeTruthy();
  });

  it('calls resetActions and dispatch on button press', () => {
    (useSelector as jest.Mock).mockReturnValue([
      { score: 3 },
      { score: 2 },
    ]);

    const { getByTestId } = render(<Result />);
    const button = getByTestId('custom-button');
    fireEvent.press(button);

    expect(NavigationServices.resetActions).toHaveBeenCalledWith('Questions');
    expect(mockDispatch).toHaveBeenCalledWith(resetSelectedAnswers());
  });
});
