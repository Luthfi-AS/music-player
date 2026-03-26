/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    // Menangani alias @/ agar tidak error saat testing
    "^@/(.*)$": "<rootDir>/$1",
  },
  // Hanya mencari file dengan akhiran .test.ts atau .spec.ts
  testMatch: ["**/__tests__/**/*.test.ts"],
};
