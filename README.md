# Super-Simple-Templating
A tiny, customizable string templater for JS. (This is a for fun project, since it already exists in javascript)

## Usage
There are three basic systems to use:
- Simple Templating
- Name Templating
- Index Templating

### Simple Templating
This is the simplest form of templating. You only type in the delimiter, and it maps your arguments by index to the string. The first template maps to the first argument, and the nth template maps to the nth argument.

You can access this method through the `template` method:
```js
import template from "super-simple-templating/src/templater.js
```
Then, call it like this:
```js
const myTemplate = template("This is my &% template! I &% it!", "favorite", "love");
```
This will produce:
```
-> This is my favorite template! I love it!
```
This is the easiest way to use SST, and is probably the most common way to use it.

### Name Templating
If you need to specify names, you can use `nameTemplate`. This takes in an object that has key/pair values, where the key matches the name specified. 

Import it:
```js
import { nameTemplate } from "super-simple-templating/src/templater.js"
```
Call it:
```js
const myNameTemplate = nameTemplate("This is my &%{rating} template! Also, my name is &%{name}", { rating: "second favorite", name: "Gautam" });
```
And it produces:
```
-> This is my second favorite template! Also, my name is Gautam
```

### Index Templating
If you want the simplicity of simple templating but the control of name templating, try index templating. Here, you specify the index that each argument maps to. So an argument with index 2 will map to the 2nd specified delimiter, even if that delimiter is not the 2nd occurance of a delimiter.

Import it:
```js
import { indexTemplate } from "super-simple-templating/src/templater.js"
```
Call it:
```js
const myIndexTemplate = indexTemplate("Hello, I am &%0, who lives on &%2, in &%1", "Gautam", "the Milky Way", "Earth");
```
Which produces:
```
-> Hello, I am Gautam, who lives on Earth, in the Milky Way
```

## Issues trying to use TypeScript
I wanted to learn TypeScript using this. However, just by trying to use the implementation of modules on the TS website, I ran into a bunch of errors that were *still* not solved. After 10 minutes of no solutions, I gave up. Maybe I didn't try hard enough, but I don't think I should need to spend more work trying to install Typescript than actually coding in it.

## Credit
Written by Gautam Khajuria (Sptele, and gautam-khajuria)