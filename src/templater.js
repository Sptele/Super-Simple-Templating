import config from "./config-loader.js";

export default function template(string, ...args) {
  return string.split(config.delimeter).reduce((prev, curr, i) => {
    return prev + args[i - 1] + curr;
  });
}

export function nameTemplate(string, args) {
  console.log(string.match(`${config.delimeter + config.braces[0]}.+${config.braces[1]}`))
}