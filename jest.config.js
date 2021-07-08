module.exports = {
  setupFilesAfterEnv: [
    './jest.setup',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  testEnvironment: 'jsdom',
};
