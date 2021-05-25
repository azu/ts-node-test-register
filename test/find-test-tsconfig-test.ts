import { getTestDirectoryInPackageJSON, findTestTsconfigJSON } from "../src/find-test-tsconfig";
import * as path from "path";
import * as assert from "assert";

describe("JSON", () => {
    it("should get test value", () => {
        const tsconfigFilePath = findTestTsconfigJSON("test", path.join(__dirname, "fixtures/has-tsconfig"));
        assert.strictEqual(tsconfigFilePath, path.join(__dirname, "fixtures/has-tsconfig/test/tsconfig.json"));
    });
});

describe("getTestDirectoryInPackageJSON", () => {
    it("should get test value", () => {
        const testValue = getTestDirectoryInPackageJSON(path.join(__dirname, "fixtures/has-test"));
        assert.strictEqual(testValue, "test");
    });
    it("should get test value, but not found", () => {
        const testValue = getTestDirectoryInPackageJSON(path.join(__dirname, "fixtures/has-not-test"));
        assert.strictEqual(testValue, undefined);
    });
});
