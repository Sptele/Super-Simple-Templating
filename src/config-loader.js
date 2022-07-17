import fs from "node:fs";

const configJSON = JSON.parse(fs.readFileSync("sst.config.json"));

const config = {
    delimeter: configJSON.delimeter,
    braces: [configJSON.braces[0], configJSON.braces[1]],
    zeroIndex: configJSON["zero-index"],
    allowNameDelimiter: configJSON["allow-name-delimitation"]
}

export default config;