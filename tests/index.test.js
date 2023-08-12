import { describe, test } from "node:test";
import { deepEqual } from "node:assert";
import { addNums } from "./main.js";

describe("add numbers testsuite", () => {
  test("testing addNums", () => {
    deepEqual(addNums(3, 5), 8);
  });

  test("testing addNums 2", () => {
    deepEqual(addNums(3, 6), 9);
  });
});
