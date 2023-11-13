import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
    'jest-test-results.json'
  ],
  testMatch: [
    "<rootDir>/__tests__/**/*.ts?(x)",
    "<rootDir>/?(*.)+(spec|test).ts?(x)",
  ],
  preset: "ts-jest",
};

export default config;
