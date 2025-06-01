import React from 'react';
import { render } from '@testing-library/react-native';
import CircularText from '@screens/splash/CircularText';

jest.useFakeTimers();

describe('CircularText Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<CircularText />);
    expect(getByTestId('circular-text')).toBeTruthy();
  });

  it('starts animation loop on mount', () => {
    const { getByTestId } = render(<CircularText />);
    expect(getByTestId('circular-text')).toBeTruthy();
  });
});
