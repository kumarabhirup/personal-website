---
title: "Implementing Google reCAPTCHA with React and Node.js"
date: "2020-06-02"
og:
  description: "Creating a Google reCAPTCHA checkbox on frontend is easy. But making it fully secure through backend will need you some efforts."
  image: "https://i.ibb.co/0XGJzZk/Google-re-CAPTCHA-React-and-Node.jpg"
author:
  twitter: "kumar_abhirup"
  name: "Kumar Abhirup"
---

> The thumbnail of this article is from [Google reCAPTCHA's official landing page](https://www.google.com/recaptcha/intro/v3.html).

In this tutorial, we will learn how to use reCAPTCHA v2 with React and Node.

Most of the tutorials online only cover the frontend part of this technology. The truth is, **your captcha solution can only be useful, if it validates the input on backend.**

Let's begin with how you can show the captcha checkbox on React Frontend by first setting up the Google reCAPTCHA console.

# Setup Google reCAPTCHA Admin

- Go to [this URL](https://www.google.com/recaptcha/admin/create) to create a reCAPTCHA app.

- Give the reCAPTCHA a label.

- Select `reCAPTCHA v2`.

- Add the domain name of where this captcha checkbox will be used. To test this checkbox on your development server, add `localhost` as your domain name.

- Click Submit.

Now that you have created the app, you can get your reCAPTCHA keys.

> Note that these keys are extremely important. The `SITE KEY` can be used in the client, but the `SECRET KEY` should be never used in the client. It should only be used in the backend.

![Get your Google reCAPTCHA Credentials](https://i.ibb.co/7WFsKWr/Site-Key-Secret-Key-Google-re-CAPTCHA-Screenshot.jpg)

---

# Setup React Frontend

Install the `react-google-recaptcha` React Component. It will simplify this terrific process.

```bash
yarn add react-google-recaptcha
```

After you install the component, here's how you can display the reCAPTCHA checkbox on the frontend.

```jsx
import ReCAPTCHA from "react-google-recaptcha"

function onChange(value) {
  console.log("Captcha value:", value)
}

export default function App() {
  return <ReCAPTCHA sitekey="YOUR_CLIENT_SITE_KEY" onChange={onChange} />
}
```

Make sure you replace `YOUR_CLIENT_SITE_KEY` with the real client site key that you got from the Google reCAPTCHA Console.

With the correct usage of the above code, you should see something like this in the browser.

![Google reCAPTCHA GIF](https://www.cmnty.com/support/wp-content/uploads/2017/07/nocaptcha.gif)

Now, if you check your console, you will see the `Captcha value: some_value` logged on the console. That same value, will be sent to the backend to verify if the user is really not a robot.

---

# Backend Verification

To verify the value that the backend gets, after the user checks the box, you will have to make a POST request to Google reCAPTCHA API.

```bash
POST https://www.google.com/recaptcha/api/siteverify
```

Here's how you do it in Node.js 👇

```js
// Install 'es6-promise' and 'isomorphic-fetch' from NPM or Yarn.
require("es6-promise").polyfill()
require("isomorphic-fetch")

const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY

const humanKey = "value_that_we_got_from_the_frontend"

// Validate Human
const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
  method: "post",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
  },
  body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
})
  .then(res => res.json())
  .then(json => json.success)
  .catch(err => {
    throw new Error(`Error in Google Siteverify API. ${err.message}`)
  })

if (humanKey === null || !isHuman) {
  throw new Error(`YOU ARE NOT A HUMAN.`)
}

// The code below will run only after the reCAPTCHA is succesfully validated.
console.log("SUCCESS!")
```

> **Note:** This article does not tell you how to communicate between frontend and backend, this article only tells you what logic to use in backend, to verify the reCAPTCHA string value you get from the frontend.

To understand the above code, we first need to understand what `fetch()` function results.

```js
await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
  method: "post",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
  },
  body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
})
```

The above snippet makes a POST request to the Google reCAPTCHA API route to get a response (to know if the humanKey we got from the frontend is correct or not).

We also supply `RECAPTCHA_SERVER_KEY` and the `humanKey` in the request body. Remember that the `RECAPTCHA_SERVER_KEY` should be kept secret. Do not push it in GitHub Open Source. [Use Environment Variables](https://www.freecodecamp.org/news/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a/#:~:text=env%20files%20allow%20you%20to,in%20there%20on%20different%20lines.&text=To%20read%20these%20values%2C%20there,the%20dotenv%20package%20from%20npm.).

Here's a Sample Response that the API gives us.

```json
{
  "success": true,
  "challenge_ts": "ISODateString", // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  "hostname": "string" // the hostname of the site where the reCAPTCHA was solved
}
```

The `success: true` is enough for us to understand that the user is not a robot. If `success: false`, then the `humanKey` we got was probably a wrong one or the user tried to hack in.

---

# Aftermath

Once you get `success: true`, you would probably want to send your frontend a response that the reCAPTCHA was not botched and the user was not a robot.

You must be using some kind of an Express/Koa API Route, or a GraphQL backend where you can get API requests from the frontend to give it some response.

If you want to see it in practise, I have hosted my code here 🔥

- [Frontend reCAPTCHA](https://github.com/KumarAbhirup/kumarabhirup/blob/0f883462652afc521d4938e1f06f0128f233e29f/src/components/mobirise/Contact.js#L270)
- [Backend reCAPTCHA Validation](https://github.com/KumarAbhirup/kumarabhirup-backend/blob/d0b9daa97e724c428ebdf3728f475d35ee7370de/src/resolvers/Mutation.js#L44)

I hope this tutorial gave you decent information on how you can validate your reCAPTCHA input on backend using Node.js and React.

Peace ✌️
