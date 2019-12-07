module.exports = {
    roots: ['<rootDir>'],
    setupFiles: ["<rootDir>/jest/setupTests.ts"],
    preset: 'ts-jest',
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/jest/styleMock.js"
    }
  }