/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/(?!src).*/.*'],
  watchPlugins: ['jest-watch-continue', 'jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
