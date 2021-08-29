const Employee = require("../lib/Employee");

test("employee role test", () => {
    const testValue = "Employee";
    const x = new Employee("Eric", 1, "test@test.com", "github");
    expect(x.getRole()).toBe(testValue);
  });

test("employee name test", () => {
        const name = "Eric";
        const x = new Employee(name);
        expect(x.name).toBe(name);
    });

test("employee id test", () => {
        const testValue = 32828;
        const x = new Employee("Eric", testValue);
        expect(x.id).toBe(testValue);
    });

test("employee email test", () => {
        const testValue = "test@test.com";
        const x = new Employee("Eric", 1, testValue);
        expect(x.email).toBe(testValue);
    }); 