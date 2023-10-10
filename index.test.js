const { describe, it } = require("node:test");
const assert = require("assert");

const { directoryToTree } = require("./index");

describe("directoryToTree", () => {
  it("should return an empty object if directory not exist", async () => {
    const dummyResult = {};
    const result = await directoryToTree("some_buggus_folder", 4);
    assert.equal(
      Object.entries(result).length,
      Object.entries(dummyResult).length,
    );
  });

  it("should return an empty object if deep is not a number", async () => {
    const dummyResult = {};
    const result = await directoryToTree("dummy_folder", "not_a_number");
    assert.equal(
      Object.entries(result).length,
      Object.entries(dummyResult).length,
    );
  });

  it("should return an object with a property children", async () => {
    const result = await directoryToTree("dummy_folder", 0);
    assert.equal(result.hasOwnProperty("children"), true);
  });

  it("should return an object with 2 levels of deep", async () => {
    const result = await directoryToTree("dummy_folder", 2);
    assert.equal(result.hasOwnProperty("children"), true);
    assert.equal(result.children[1].hasOwnProperty("children"), true);
    assert.equal(
      result.children[1].children[2].hasOwnProperty("children"),
      false,
    );
  });

  it("should return an object with 3 levels of deep", async () => {
    const result = await directoryToTree("dummy_folder", 3);
    assert.equal(result.hasOwnProperty("children"), true);
    assert.equal(result.children[1].hasOwnProperty("children"), true);
    assert.equal(
      result.children[1].children[2].hasOwnProperty("children"),
      true,
    );
  });
});
