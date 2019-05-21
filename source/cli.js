#!/usr/bin/env node
"use strict";
const path = require("path");
const meow = require("meow");
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const importJsx = require("import-jsx");
const React = require("react");
const { render } = require("ink");

const ui = importJsx("./ui");

meow(`
	Usage
	  $ heyitsnicht
`);

render(React.createElement(ui));
