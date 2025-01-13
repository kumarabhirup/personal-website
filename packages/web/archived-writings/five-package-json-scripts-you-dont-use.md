---
title: "5 package.json magic scripts that you don't use!"
date: "2020-05-07"
og:
  description: "There are many magic scripts available for use by the Node Package Manager ecosystem, that beginners yet don't use."
  image: "https://res.cloudinary.com/practicaldev/image/fetch/s--WMWUiYbE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--PLhINg-k--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/5iy792219yylpm6chzf9.png"
  imageTypeOnArticle: "NORMAL"
author:
  twitter: "kumar_abhirup"
  name: "Kumar Abhirup"
---

There are many magic scripts available for use by the Node Package Manager ecosystem, that beginners yet don't use.

When I wanted to publish a package, I would manually bump the version, build the project, and then run `npm publish` to ship the package. Which by itself took a lot of time.

But then, I read [this documentation](https://docs.npmjs.com/misc/scripts) by npm and realized that all the processes can be automated and can be done in just one command.

The documentation has a lot going on, so in this DEV post, I'll try to
demystify the 5 most important package.json scripts using the documentation as a reference.

# Let us begin

## 1. prepublish

```json
"scripts": {
  "prepublish": "minify or build your code here",
}
```

_This command is run BEFORE the package is packed and published. This command also runs when user runs `npm i` locally without any parameters and arguments._

**From the NPM Docs:**

> If you need to perform operations on your package before it is used, in a way that is not dependent on the operating system or architecture of the target system, use a prepublish script.

Prepublish script includes tasks such as:

- Compiling CoffeeScript source code into JavaScript.
- Creating minified versions of JavaScript source code.
- Fetching remote resources that your package will use.

The advantage of doing these things at prepublish time is that they can be done once, in a single place, thus reducing complexity and variability.

Additionally, this means that:

- You can depend on `coffee-script` as a `devDependency`, and thus your users don’t need to have it installed.
- You don’t need to include minifiers in your package, reducing the size for your users.
- You don’t need to rely on your users having `curl` or `wget` or other system tools on the target machines.

## 2. prepare

There is a little difference between `prepare` and `prepublish`...

_`prepare` script runs when `git` dependencies are being installed. This script runs after `prepublish` and before `prepublishOnly`._

Example 👇

```json
"scripts": {
   "build": "rollup -c",
   "prepare": "npm run build"
}
```

Building the project could be the best thing you can execute in the `prepare` script.

## 3. prepublishOnly

This command serves the same purpose as `prepublish` and `prepare` but runs only on `npm publish`! 🔥

## 4. postpublish

As the name suggests, the command runs after `npm publish`...

## 5. Custom `pre`ing and `post`ing of scripts

Take a look at the below scripts.

```
"scripts": {
  "predeploy": "cd example && npm install && npm run build",
  "deploy": "gh-pages -d example/build"
}
```

To execute `deploy` completely, you don't need to `npm run predeploy && npm run deploy`, just running `npm run deploy` will do the `pre` and `post` task.

You can add the `pre` and `post` prefixes to any script and have it run chronologically.

# And there's much more

- preinstall
- postinstall
- preuninstall
- postuninstall
- preversion
- postversion
- prestart
- poststart

The names are pretty self-explanatory.

To read more about these, you can refer the [NPM Docs](https://docs.npmjs.com/misc/scripts) about `npm-scripts`.

# Conclusion

The NPM Magic Scripts can prove useful to anyone and everyone. I regret not using it for my past projects. 😅
