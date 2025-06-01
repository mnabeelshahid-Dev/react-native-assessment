module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'], // Ensure this points to the correct file
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.png$': 'jest-transform-stub', // Handle PNG files
    '^.+\\.svg$': 'jest-transform-stub', // Handle SVG files if needed
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-check-box|react-native-button|react-native-snap-carousel|react-native-progress|react-redux)|react-navigation/)',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Handle CSS modules
    '\\.(png|jpg|jpeg|gif)$': 'jest-transform-stub', // Handle image files
},
  
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
  ],
};

