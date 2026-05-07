// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe("isPhoneNumber", () => {
  test("valid phone number with dashes", () => {
    expect(isPhoneNumber("123-456-7890")).toBe(true);
  });

  test("valid phone number with parentheses", () => {
    expect(isPhoneNumber("(123) 456-7890")).toBe(true);
  });

  test("invalid phone number missing digits", () => {
    expect(isPhoneNumber("123-45-7890")).toBe(false);
  });

  test("invalid phone number with letters", () => {
    expect(isPhoneNumber("abc-def-ghij")).toBe(false);
  });
});

describe("isEmail", () => {
  test("valid email", () => {
    expect(isEmail("test@email.com")).toBe(true);
  });

  test("valid email with underscore", () => {
    expect(isEmail("hello_world@test.org")).toBe(true);
  });

  test("invalid email missing @", () => {
    expect(isEmail("testemail.com")).toBe(false);
  });

  test("invalid email missing domain", () => {
    expect(isEmail("test@")).toBe(false);
  });
});

describe("isStrongPassword", () => {
  test("valid strong password", () => {
    expect(isStrongPassword("Pass123")).toBe(true);
  });

  test("valid password with underscore", () => {
    expect(isStrongPassword("A_bc1234")).toBe(true);
  });

  test("password too short", () => {
    expect(isStrongPassword("Ab1")).toBe(false);
  });

  test("password starts with number", () => {
    expect(isStrongPassword("1Password")).toBe(false);
  });
});

describe("isDate", () => {
  test("valid date with single digits", () => {
    expect(isDate("1/2/2024")).toBe(true);
  });

  test("valid date with double digits", () => {
    expect(isDate("12/25/2024")).toBe(true);
  });

  test("invalid date with wrong separator", () => {
    expect(isDate("12-25-2024")).toBe(false);
  });

  test("invalid date missing year digits", () => {
    expect(isDate("12/25/24")).toBe(false);
  });
});

describe("isHexColor", () => {
  test("valid 6-digit hex color", () => {
    expect(isHexColor("#FFA500")).toBe(true);
  });

  test("valid 3-digit hex color", () => {
    expect(isHexColor("#FFF")).toBe(true);
  });

  test("invalid hex color with wrong characters", () => {
    expect(isHexColor("#GGGGGG")).toBe(false);
  });

  test("invalid hex color wrong length", () => {
    expect(isHexColor("#FFFF")).toBe(false);
  });
});