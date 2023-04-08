const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@assets(.*)$': `${path.resolve(__dirname, 'src/assets')}$1`,
    '^@icons(.*)$': `${path.resolve(__dirname, 'src/components/atoms/icons')}$1`,
    '^@atoms(.*)$': `${path.resolve(__dirname, 'src/components/atoms')}$1`,
    '^@molecules(.*)$': `${path.resolve(__dirname, 'src/components/molecules')}$1`,
    '^@organisms(.*)$': `${path.resolve(__dirname, 'src/components/organisms')}$1`,
    '^@hooks(.*)$': `${path.resolve(__dirname, 'src/hooks')}$1`,
    '^@context(.*)$': `${path.resolve(__dirname, 'src/context')}$1`,
  },
  setupFilesAfterEnv: ['./jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    'src/__tests__/test-utils.js',
    'src/__tests__/__mocks__/*',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}', // Collect coverage from all .js and .jsx files in the src folder
    '!src/components/atoms/icons/**/*', // Exclude the Icon folder from coverage collection
    '!src/__tests__/test-utils.js',
  ],
};
