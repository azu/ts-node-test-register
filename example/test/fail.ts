import * as assert from "assert";
import { hello } from "../src";

it("fail", () => {
    // mismatch
    assert.equal(hello(), "Hello");
});
