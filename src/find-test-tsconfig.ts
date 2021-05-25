import * as path from "path";
import * as fs from "fs";
import readPkg = require("read-pkg");

/**
 * get "test" dir
 * "directories": {
 *   "lib": "lib",
 *   "test": "test"
 * },
 *
 * @param {string} currentDir
 */
export const getTestDirectoryInPackageJSON = (currentDir?: string) => {
    if (!currentDir) {
        return;
    }
    const pkg = readPkg.sync({
        cwd: currentDir
    });
    if (!pkg) {
        return;
    }
    if (!pkg.directories) {
        return;
    }
    if (typeof pkg.directories.test !== "string") {
        return;
    }
    return pkg.directories.test;
};

export const resolvePath = (filePathList: string[]): string | undefined => {
    for (let i = 0; i < filePathList.length; i++) {
        const filePath = filePathList[i];
        if (fs.existsSync(filePath)) {
            return filePath;
        }
    }
    return undefined;
};
/**
 * Find tsconfig.json by follows
 *
 * 1. test/tsconfig.test.json
 * 2. test/tsconfig.json
 * 3. tsconfig.test.json
 * 4. tsconfig.json
 *
 * @param {string} testDirectoryName
 * @param {string} baseDirectory
 * @returns {string | undefined}
 */
export const findTestTsconfigJSON = (testDirectoryName: string = "test", baseDirectory = process.cwd()) => {
    const testTsconfigJsonInTestDir = path.join(baseDirectory, testDirectoryName, "tsconfig.test.json");
    const tsconfigJsonInTestDir = path.join(baseDirectory, testDirectoryName, "tsconfig.json");
    const testTsconfigJsonInCurrentDir = path.join(baseDirectory, "tsconfig.test.json");
    const tsconfigInCurrentDir = path.join(baseDirectory, "tsconfig.json");
    return resolvePath([
        testTsconfigJsonInTestDir,
        tsconfigJsonInTestDir,
        testTsconfigJsonInCurrentDir,
        tsconfigInCurrentDir
    ]);
};
