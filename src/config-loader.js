import configJSON from "../sst.config.json" assert {type: 'json'};

const config = {
    delimeter: configJSON.delimeter,
    braces: [configJSON.braces[0], configJSON.braces[1]],
    allowNameDelimiter: configJSON["allow-name-delimitation"]
}

export default config;