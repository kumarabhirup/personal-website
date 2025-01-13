---
title: "A starter guide to create a command-line app in Node.js"
date: "2020-05-10"
og:
  description: "Many developers use command-line apps on a daily basis. Today, we will learn how to create Command-Line Apps in Node."
  image: "https://i.ibb.co/s11JCZq/thumbnails-001.png"
  imageTypeOnArticle: "NORMAL"
author:
  twitter: "kumar_abhirup"
  name: "Kumar Abhirup"
---

Many developers use command-line apps on a daily basis.

From git to yarn, we use many CLI (Command Line Interface) apps. Not everyone likes CLI over GUI, but many geeks love using CLIs.

Today, we will learn how to create Command-Line Apps in Node.js

Command-Line apps can be written in many languages. If you write them in Node.js, you can serve your app to the NPM/Yarn users.

# Assumptions

- You know how to install NPM packages.
- You know the basics of Node.js
- You know basic terminal commands like `cd`, `pwd`, `ll`, `ls`.

# Get Started

- `cd` to the repository where you store all your code.

- Do the following...

```bash
mkdir demo-cli && cd demo-cli
touch index.js
npm init -y
```

- Open the `demo-cli` folder in your favorite code editor.

## index.js

CLI apps are all about input and output. In this Starter Guide, we won't go deep into creating a CLI that does something important.

For now, we will only make use of `chalk` and `figlet` to do make some creative output.

Run the following command to install needed packages...

```bash
npm i chalk figlet clear -s
```

And then, just paste the following snippet in your `index.js`.

```js
#!/usr/bin/env node

const clear = require("clear")
const chalk = require("chalk")
const figlet = require("figlet")

clear()

console.log(
  chalk.yellow.bold(
    figlet.textSync("CLI!", {
      horizontalLayout: "full"
    })
  )
)
```

The `#!/usr/bin/env node` line needs to be at the top for a Command Line App to work.

## package.json

Add a Start Script in your `package.json`...

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

Also, add a `bin` script. That script decides what command will user need to type to see the output.

```json
{
  "bin": {
    "thisDemoCli": "index.js"
  }
}
```

# See the output

Run `npm start` to see how the output looks like. Isn't it just like running a Node app?

Okay, now, do this...

```bash
pwd # Copy the output you get
npm i -g <PASTE_THE_OUTPUT_OF_PREV_COMMAND>
```

**And now try running `thisDemoCli` in the terminal, and you should see the same output!**

Output...

```
  / ___| | |     |_ _| | |
 | |     | |      | |  | |
 | |___  | |___   | |  |_|
  \____| |_____| |___| (_)
```

# Publish to NPM

To publish to NPM so that you can serve your apps to users, give your package a unique name, and provide it a version.

And then run...

```bash
npm publish
```

**That is it!**

# 🦄 More info

This tutorial only helps you create a naive command-line app. Real command-line apps have a lot going on. Like [the one I created](https://github.com/KumarAbhirup/bulk-mail-cli).

Make use of the `commander` NPM module to make the CLI do different tasks on different flags like `--help`, `--version`, etc.

Here's the [Part Two of the Series - Creating a command-line app in Node.js: Argument Parsing](https://dev.to/kumar_abhirup/a-starter-guide-to-creating-a-command-line-app-in-node-js-part-2-3ln3).
