const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("manager role test", () => {
  const testValue = "Manager";
  const x = new Manager("Eric", 1, "test@test.com", "github");
  expect(x.getRole()).toBe(testValue);
});

test("manager name test", () => {
      const name = "Eric";
      const x = new Manager(name);
      expect(x.name).toBe(name);
  });

test("manager id test", () => {
      const testValue = 32828;
      const x = new Manager("Eric", testValue);
      expect(x.id).toBe(testValue);
  });

test("manager email test", () => {
      const testValue = "test@test.com";
      const x = new Manager("Eric", 1, testValue);
      expect(x.email).toBe(testValue);
  }); 

  test("manager phone number test", () => {
    const testValue = "1234567890";
    const x = new Manager("Eric", 1, "test@test.com", testValue);
    expect(x.officeNumber).toBe(testValue);
  });