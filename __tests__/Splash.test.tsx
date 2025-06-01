import React from 'react';
import { render } from '@testing-library/react-native';
import Splash from '@screens/Splash/Splash';
import * as NavigationServices from '@navigation/NavigationServices';
import { act } from 'react-test-renderer';

jest.mock('@navigation/NavigationServices', () => ({
  resetActions: jest.fn(),
}));

jest.mock('@screens/Splash/CircularText', () => {
  return () => <></>; 
});

jest.useFakeTimers();

describe('Splash Screen', () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByTestId } = render(<Splash />);
    expect(getByTestId('splash-screen')).toBeTruthy();
  });

  it('calls resetActions after 5 seconds', () => {
    render(<Splash />);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(NavigationServices.resetActions).toHaveBeenCalledWith('Questions');
  });
});
