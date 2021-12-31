# Begining-react

Yay! So this is my shot at react.
Things i have learned?
To get started with React, type:
- install nodejs (If you do not have node already installed)
- npm install -g create-react-app
Note: All of these happens on the terminal. 
To create a react app, type the following commands in the terminal, relative to the directory you want to use.
create-react-app <filename> (Note: It shouldn't begin with a capital letter)
Alternatively, you use the react syntax:
npx create-react-app <filename>
React has a folder structure when a react folder is initialized with create-react-app. It usually has the look of:

>node_modules
>public
>src
 App.css
 App.js
 App.test.js
 Index.css
 index.js
 logo.svg
 ServiceWorker.js
gitignore
pakage.lock.json
package.json

Usually, all files in the src directory are usually deleted leaving the index.js file.
The index.js file would usually contain:
import React from "react";
import ReactDOM from "react-dom";


The first signifying a call to React's components and the second, signifying a medium of usage for the HTML DOM API. 

JSX
It looks like HTML but has quite a few diffences

