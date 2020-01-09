import * as assert from "assert"

import { asciiToHex } from "../../extension"

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as myExtension from '../extension';

suite("Extension Test Suite", () => {
  test("should convert simple json to hex", () => {
    const json = {
      name: "Ymir",
      class: "Shaman"
    };
    const expectedOutput =
      "7b,22,6e,61,6d,65,22,3a,22,59,6d,69,72,22,2c,22,63,6c,61,73,73,22,3a,22,53,68,61,6d,61,6e,22,7d";
    const hex = asciiToHex(JSON.stringify(json), ",");

    assert.deepEqual(hex, expectedOutput);
  });
});
