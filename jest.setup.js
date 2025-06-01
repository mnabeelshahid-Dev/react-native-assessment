// // jest.setup.js

// import 'react-native-gesture-handler/jestSetup';

// // Mocking the Animated module
// jest.mock('react-native/Libraries/Animated/Animated', () => {
//   const React = require('react');
//   return {
//     View: (props) => <div {...props} />,
//     createAnimatedComponent: (Component) => Component,
//     // Add any other Animated methods you need to mock
//     timing: jest.fn(),
//     spring: jest.fn(),
//     // Mock other properties/methods as needed
//   };
// });

// // Mocking images
// jest.mock('react-native/Libraries/Image/Image', () => {
//   const React = require('react');
//   return (props) => {
//     return <React.View {...props} />;
//   };
// });

// // Mock the navigation
// jest.mock('@react-navigation/native', () => {
//   return {
//     ...jest.requireActual('@react-navigation/native'),
//     useNavigation: () => jest.fn(),
//   };
// });

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
    const React = require('react');
    const { View } = require('react-native');

    return {
        // Mock the GestureHandler functions
        TapGestureHandler: (props) => <View {...props} />,
        PanGestureHandler: (props) => <View {...props} />,
        // Add any other handlers you may need
        Directions: {},
    };
});

module.exports = {
  process(src, filename) {
      return `module.exports = ${JSON.stringify(filename)};`;
  },
};
