import * as assert from "assert";
import { hello } from "../src";

it("hello", () => {
    assert.equal(hello("you"), "Hello");
});
