---
title: "How to Rate Limit your Express API Endpoints"
date: "2021-01-16"
og:
  description: "Rate Limit your API routes with IP Addresses or User Identities using the express-limiter module."
  image: "https://images.unsplash.com/photo-1517697063925-d82f8da41135?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80"
author:
  twitter: "kumar_abhirup"
  name: "Kumar Abhirup"
---

> The featured image of this article is from [Unsplash](https://images.unsplash.com/photo-1517697063925-d82f8da41135?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80).

This won't be a long tutorial, but a small, very self explanatory code snippet, that you can easily read and learn by yourself.

![Rate Limit your Express API Endpoints](https://i.ibb.co/b10C3rz/rate-limit-your-endpoints.png)

# 🚶‍♂️ Quick Walkthrough

### Step 1

Install `express`, `express-limiter` and also install Redis to [set up a Redis Client](https://docs.redislabs.com/latest/rs/references/client_references/client_ioredis/). Redis Client will be created using `ioredis`.

Why do you need Redis? Here's why 👇

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">✅ What is 𝑹edis?<br><br>I started using it many months ago, when implementing PubSub, but it is used for many more things.<br><br> It... 👇<br><br>- is an In-memory data structure store<br>- is Used as a database, or cache store<br>- Provides simple data structures such as strings &amp; arrays</p>&mdash; Kumar Abhirup (@kumar_abhirup) <a href="https://twitter.com/kumar_abhirup/status/1350010149725868032?ref_src=twsrc%5Etfw">January 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<br />

### Step 2

Import express and create an express app instance. Now, create a limiter instance. We will use `express-limiter` for this.

```js
const limiter = expressLimiter(app, redisClient)
```

Make sure you spawned a Redis Client, [read how to do that here](https://docs.redislabs.com/latest/rs/references/client_references/client_ioredis/).

This limiter instance will now help us create a `limiterForApi` to define Rate Limit rules to use it for your routes as a middleware.

### Step 3

Define the rules. Create the middleware.

```js
const limiterForApi = limiter({
  onRateLimited(_req, res) {
    return res.status(429).send({ error: { message: "Rate limit exceeded" } })
  },

  total: 200,
  expire: 1000 * 60 * 60,
  lookup: ["headers.data.user._id"]
})
```

The above middleware sets the API rate limit at 200 requests per hour per User ID. If you want to rate limit per IP Address, you can add the IP Address header name in the `lookup` array.

### Step 4

Use the middleware!

## Here's the complete code snippet

If you read the code comments, you will get a fair idea of how things work!

![Rate Limit your Express API Endpoints](https://i.ibb.co/b10C3rz/rate-limit-your-endpoints.png)

For more details and complexities, take a look at the [`express-limiter` documentation](http://npmjs.com/package/express-limiter). It's very neat.
