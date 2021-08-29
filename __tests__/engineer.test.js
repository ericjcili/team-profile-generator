const Engineer = require("../lib/Engineer");

test("engineer role test", () => {
    const testValue = "Engineer";
    const x = new Engineer("Eric", 1, "test@test.com", "github");
    expect(x.getRole()).toBe(testValue);
  });

  test("engineer name test", () => {
    const name = "Eric";
    const x = new Engineer(name);
    expect(x.name).toBe(name);
});

test("engineer id test", () => {
  const testValue = 32828;
  const x = new Engineer("Eric", testValue);
  expect(x.id).toBe(testValue);
});

test("github username test", () => {
  const testValue = "github";
  const x = new Engineer("Eric", 1, "test@test.com", testValue);
  expect(x.github).toBe(testValue);
});

test("engineer email test", () => {
    const testValue = "test@test.com";
    const x = new Engineer("Eric", 1, testValue);
    expect(x.email).toBe(testValue);
}); 