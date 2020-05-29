// jest.config.js
module.exports = {
  rootDir: process.cwd(),
  reporters: [
    'jest-spec-reporter',
  ],
  roots: [
    '<rootDir>/src',
  ],
  automock: false,
  moduleDirectories: [
    'node_modules',
    'src',
  ],
}
