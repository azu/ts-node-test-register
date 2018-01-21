import { getTestDirectoryInPackageJSON } from "../src/find-test-tsconfig";
import * as path from "path";
import * as assert from "assert";

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
