const funcs = require("./script.js");

describe("Script file", () => {
  it("Checks if getCube returns cube of number", () => {
    expect(funcs.getCube(3)).toBe(27);
  });

  it("Checks if getSquare returns square of number", () => {
    expect(funcs.getSquare(2)).toBe(4);
  });

  it("Checks for no array", () => {
    expect(funcs.findDuplicate()).toBe(false);
  });

  it("Checks for duplicate in array", () => {
    expect(funcs.findDuplicate([1, 2, 3, 4, 2])).toBe(2);
  });

  it("Checks for NOT duplicate in array", () => {
    expect(funcs.findDuplicate([1, 2, 3, 4, 5])).toBe(false);
  });
});
