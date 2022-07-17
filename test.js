import template, {nameTemplate} from "./src/templater.js";

console.log(nameTemplate("Hello $%{to}, I am a $%{from}", { to: "God", from: "Human" }))