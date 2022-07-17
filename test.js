import template, { indexTemplate, nameTemplate } from "./src/templater.js";

const generic = template("Hello &% I am your &%", "Person", "Friend");
console.log(generic);

const numbered = indexTemplate("Welcome &%1 to &%3, where &%2 lives!", "my friend", "John", "Olympia");
console.log(numbered);

const named = nameTemplate("Hello &%{to}, I am a &%{from}", { to: "God", from: "Human" });
console.log(named);