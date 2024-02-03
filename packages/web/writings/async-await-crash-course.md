---
title: "async/await Crash Course"
date: "2020-05-06"
og:
  description: "If you are the person who knows very little async await, this tutorial to help you be an asynchronous JavaScript pro!"
  image: "https://res.cloudinary.com/practicaldev/image/fetch/s--drLrm7wo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/elyz1q0rdxsrl5tldd2j.png"
author:
  twitter: "kumar_abhirup"
  name: "Kumar Abhirup"
---

🔥 Learn async/await (very basics) here 👇

When you learn async/await in JavaScript, you quickly fall into words like

- Synchronous & Asynchronous code
- Event Loops
- Promises

These things aren't easy to understand in one go.
**Complex theories gatekeep beginners.**
So, we will only learn about practical stuff.

---

Let us first learn about "Promises"

In the below snippet, what we are intending is to
output `Done First`
and then output `Done Last`.

But the below snippet outputs "Done Last" first.

That is how JavaScript behaves. It does not wait by default.

![Code Snippet](https://i.ibb.co/d0Nc65D/1.png)

---

To make JavaScript wait for a second

to output `Done First`

and then print `Done Last`...

We use `Promise` constructor.

It accepts a function as the only argument.

The function receives few params. 2 of them being `resolve` and `reject`.

![Code Snippet](https://i.ibb.co/4p2VXw9/2.png)

`resolve` accepts arguments.

These arguments later become the params in the .then() function.

So, the .then() function runs only after the promise is resolved.

Well, don't create a Promise just for a "console.log after setTimeout".

**This was just for explanation.** 🙂

---

Now, here's the async/await part.

```js
promise.then(() => console.log("Done Last."))
```

can also be written as

```js
await promise
console.log("Done Last.")
```

Just like in the below snippet. It just works!

Await tells JavaScript, "Wait until this is finished, then move to the next line".

Wondering what's the `async` part in the below snippet?

![Code Snippet](https://i.ibb.co/zs8X16s/3.png)

---

The await keyword only happens to work inside an async function.

An async function tells the compiler ahead of time that the function will be returning a Promise and will not have a value resolved right away.

![Code Snippet](https://i.ibb.co/8D39DNp/4.png)

---

# Links

- [Mozilla Promise Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

I hope that gives a basic idea about what async/await is and what it does. :)
