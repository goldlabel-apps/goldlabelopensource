---
category: "tricks-of-the-trade"
slug: "/blog/javascript/scope"
title: "Scopes"
description: "Don't pollute the global namespace"
keywords: "tricks"
icon: "javascript"
image: "/png/javascript.png"
order: 20
---
Scope defines where a variable can be accessed in your code. It's important to keep code maintanable and avoid conflicts. It helps to separating library variables

#### Global Scope
Variables not contained by any function, defined directly under `window` object, and can be accessed everywhere inside your code. It's not considered good practice to use Global variables. Doing so is called "polluting the global namespace"


#### Local Scope
Variables defined inside a function and accessible inside that function only

#### Lexical (or nested) Scope 
Variables defined inside a function where this function is contained by another function, we can consider this as a nested local scopes

```javascript
var globalName = "amr";

function scopeFunction() {
    globalMessage = "hello"; //undeclared variable initialization without using var keyword thats why it's a global variable.

    var localName = "labib"; //Scoped by the current function

    console.log(localName);  //labib ->  local variable
}

scopeFunction();

console.log(globalName);       //amr  ->  global variable, defined in the global scope
console.log(globalMessage);    //hello -> global variable because it's defined without using var keyword
console.log(localName);        //ReferenceError: localName is not defined  -> local variable because it's scoped by scopeFunction function
```

#### No Block Scope!: (if, for, while, switch):
Variables defined inside a block statement will take the parent scope.

#### ES6 `let` and `const` keywords: 
In ES6 you can use `let` or `const` keywords instead of `var` inside block statement to create local scope variable to that block statement.

```javascript
if (true) {
    var globalJob = "Software Engineer"; //block statement does not create new scope for variables
    let localTitle = "Mr"; //we can define local variables inside block statement using es6 let keyword
}
console.log(globalJob);  //Software Engineer -> global variable because it's defined inside a block statement
console.log(localTitle); //ReferenceError: localTitle is not defined ->  local variable defined with let inside block statement
```

### Scope Chain
It’s always the position in the code that defines the scope. When resolving a variable, JavaScript starts at the innermost scope and searches outwards until it finds the variable/object/function it was looking for

```javascript
var x = 1;
function scopeFunc(){
    var x = 2;
    function innerScopeFunc(){
    	var x = 3;
    	console.log(x) //3 --> innermost scope
    }
    innerScopeFunc();
    console.log(x);    //2 -> second innermost scope
}

scopeFunc();
console.log(x); //1 global scope
```
