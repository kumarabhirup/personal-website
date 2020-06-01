---
title: "This is how you should build and publish a Modern React Component!"
date: "2020-05-05"
og:
  description: "A brief guide about publishing react components to NPM using the best practises."
  image: "https://res.cloudinary.com/practicaldev/image/fetch/s--U98S70Pc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/ih3qpm4vxhpscgdk24fg.png"
  imageTypeOnArticle: "NORMAL"
author:
  twitter: "kumar_abhirup"
  name: "Kumar Abhirup"
---

React developers use similar component code day in and day out. But not all of them streamline the React Component building and publishing workflow.
Before we discuss the building and publishing workflow, here's why we need to have it.

# Before we discuss the building and publishing workflow, here's why we need to have it

- **Reason 1:** Most of our React code is reusable and there's a high chance that we need the same React Component in another project.
- **Reason 2:** To keep a code uniformity among all of our React Projects.
- **Reason 3:** An opportunity to contribute to the open-source. We can publish the component, and have others use it as well!

You know how NPM packages are built. Yet, when it comes to publishing the React Component we use in a project, we hesitate.

# Reasons why you hesitate

- Building a new React Component that is publishable on NPM takes a lot of efforts.
- You feel it is not worthy to waste time installing and updating the published package in your project.
- You want your component in your components folder, and when component code is changed, you want your project to "live reload".

# When I was a novice, I used to publish a React Component like this…

I used to create a new Git Repository.

Then setup all the babel and webpack stuff.

Then I would write the React Component code.

Then I would compile it manually and publish it to npm using `npm publish`.

To test the React Component, I would manually install the component in my project directory using `npm i -S that-react-component`. That had no "Live Reload"…

I had to update the package in the Component Repository and Update the module back in my project.

> How shitty that procedure was. I knew it was shitty. So, I stopped open sourcing React Components. I let them lie in my Project Directories. If I would need a component, I copy-pasted the component files to another project. And that went on. Until I learned about…

`create-react-library` and `npm link`!

I was just strolling through the GitHub search box typing weird stuff, and then I found `create-react-library`.

![React Workflow](https://cdn-images-1.medium.com/max/2560/1*tt-8-gpw-xLZu0heaMZ57g.png)

# Here's the much better way of doing it

## Step 1

So, every time you know you are building a component for the ongoing project, think…

- If you might need the component for other projects.
- If the component can be useful for other devs out there.
- If your component logic and use-case is not very project-specific.
- Or for the sanity sake, you want your project files to be less cluttered.

**If you see any of those reasons valid, you should consider building the component as a reusable component that is packaged as a module.**

If yes, then move to Step 2.

## Step 2

Visit the master folder where you store all your projects via terminal and run the following 👇

```bash
npx create-react-library <COMPONENT_NAME> # then answer few basic prompts
cd <COMPONENT_NAME> # enter in that directory
```

**And voila! You got your React Component Boilerplate Code setup.**

## Step 3

Do the following in the terminal 👇

```bash
npm i # this will install your component modules
cd example && npm i # install CRA modules
npm start
```

Running above commands will install the modules that your React Component and Create React App Example will need.

## Step 4

Let us browse the file structure of the project.

```
project
│   README.md
│   package.json
|   ...
│
└───example
│   │   package.json
│   │   ...
│
└───src
    │   package.json
    │   ...
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time!

## Step 5

Well, what if **you want the component to work live with your ongoing project** without having to update and publish on npm?

Here, `npm link` comes for the rescue!

In your the root of your component directory, run `$ npm link`. That makes your component available globally to all projects!

## Step 6

Now via terminal, reach the ongoing project directory, and run
`$ npm link <COMPONENT_NAME>`.

That is it. You have connected both the worlds!

**Let both of your component directory and ongoing project watch and compile the code live.**

## Step 7

It's time to use the component in your project!
You can import and use the component in a normal way.

```javascript
import ThatAwesomeComponent from "<COMPONENT_NAME>"
```

Now when you update your component code and refresh your project in the browser, you'll see things come alive!

**Go! Try that yourself!**

---

# Publishing your React Component

Now that you want to publish/deploy/ship your React Component…

- **Make sure you have good documentation supporting your code.**
- Also, check your version number. If you feel it's all right and working, it's time to publish!

```bash
npm publish
```

That is it. Your files will be built and published on NPM Registry!

**If you want your build to be less bloated, publish the component with the following `.npmignore` file.**

```bash
# it is also configured for TypeScript Components
src
example
.vscode
.eslintrc
.prettierrc
package-lock.json
tsconfig.json
tsconfig.test.json
.gitignore
node_modules
.travis.yml
rollup.config.js
```

## You forgot one thing

Do not forget to `npm unlink` the component from your ongoing project directory so that you can use the "real" and "published" component. When do develop the component, you may link it again.

To unlink, do `$ npm unlink <COMPONENT_NAME>` from the project directory.

---

# Links

- [create-react-library](https://github.com/transitive-bullshit/create-react-library)
- [how-to-use-npm-link](https://codurance.com/2016/12/21/how-to-use-npm-link)

# Conclusion

React components can be more awesome if built and published the right way.
