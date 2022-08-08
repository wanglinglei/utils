//jest.config.js
module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
};
