import { register } from "ts-node";
import { findTestTsconfigJSON, getTestDirectoryInPackageJSON } from "./find-test-tsconfig";

const testDir = getTestDirectoryInPackageJSON();
const tsconfigFilePath = findTestTsconfigJSON(testDir);
register({
    project: tsconfigFilePath,
    typeCheck: true,
});
