import config from "./config-loader.js";

// An array of all special regex chars, from https://docs.trifacta.com/display/DP/Supported+Special+Regular+Expression+Characters
// (This is an ARRAY)
const SPECIAL_REGEX_CHARACTERS = ". ^ $ * + - ? ( ) [ ] { } \ | — /".split(" ");
const escapedDelimiter = config.delimeter.split('').map((v) => {
  if (SPECIAL_REGEX_CHARACTERS.includes(v)) return ("\\" + v);
  return v;
}).join('');

/**
 * Maps your arguments into the string by simple indexing. The first template maps to the first argument, and the nth template maps to the nth argument.
 * @param {string} string - The string with templates.
 * @param  {...string} args - The arguments that will replace the templates, in order
 * @returns {string} a templatized string
 */
export default function template(string, ...args) {
  return string.split(config.delimeter).reduce((prev, curr, i) => {
    return prev + args[i - 1] + curr;
  });
}

/**
 * Maps your arguments into the string by name. The name is specified inside the braces in the config, after the delimiter. With default settings:
 * `&%{myName}` would be replaced with the value of a key called `myName`.
 * @param {string} string - The string with templates
 * @param {object} args - An object (key-value pairs) that will replace the templates by the key (name) with the value
 * @returns {string} a templatized string
 */
export function nameTemplate(string, args) {
  if (!config.allowNameDelimiter)
    throw new Error("nameTemplate WAS CALLED WHILE allow-name-delimitation IS DISABLED IN sst.config.json, ENABLE IT TO USE THIS FUNCTION");

  const regex = new RegExp(`${escapedDelimiter + "\\" + config.braces[0]}(.*?)\\${config.braces[1]}`, "g");
  const keys = string.match(regex).map((group) => [
    group, group.substring(config.delimeter.length + 1, group.length - 1)
  ]);

  let final = string;
  keys.forEach((v) => final = final.replace(v[0], args[v[1]]))

  return final;
}

/**
 * Similar to simple templating, this also works by index. However, you can customize the index, for whatever reason. Simply put the index after the delimiter.
 * @param {string} string - The string with templates
 * @param  {...string} args - The arguments that will replace the templates, in order
 * @returns {string} a templatized string
 */
export function indexTemplate(string, ...args) {
  const regex = new RegExp(`${escapedDelimiter}([0-9]*)`, "g");
  const keys = string.match(regex).map((group) => [
    group, parseInt(group.substring(config.delimeter.length, group.length)) - (config.zeroIndex ? 0 : 1)
  ]);


  let final = string;
  keys.forEach((v) => final = final.replace(v[0], args[v[1]]))

  return final;
}