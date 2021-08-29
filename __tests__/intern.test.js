const Intern = require("../lib/Intern");

test("intern role test", () => {
  const testValue = "Intern";
  const x = new Intern("Eric", 1, "test@test.com", "github");
  expect(x.getRole()).toBe(testValue);
});

test("intern name test", () => {
  const name = "Eric";
  const x = new Intern(name);
  expect(x.name).toBe(name);
});

test("intern id test", () => {
  const testValue = 32828;
  const x = new Intern("Eric", testValue);
  expect(x.id).toBe(testValue);
});

test("intern email test", () => {
  const testValue = "test@test.com";
  const x = new Intern("Eric", 1, testValue);
  expect(x.email).toBe(testValue);
}); 