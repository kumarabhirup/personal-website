---
title: "Next.js + Docker. Made easy."
date: "2020-05-04"
og:
  description: "After a few days of research and setting up a Containerized Next.js App, I am here to share with you how to do it."
  image: "https://res.cloudinary.com/practicaldev/image/fetch/s--3XKn-1bL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vhyp2izu2jx3a6oj2euz.jpg"
author:
  twitter: "kumar_abhirup"
  name: "Kumar Abhirup"
---

This week while starting to build a huge SaaS product, I had to make many decisions. The biggest decision I made was to build that SaaS product with the Microservices architecture.

Thankfully, [Lucas Chen](https://dev.to/bettercodingacademy) had [this amazing series](https://dev.to/bettercodingacademy/i-m-a-professional-react-developer-and-here-s-how-i-set-up-react-node-js-microservices-using-docker-and-graphql-20gk) that explained the React + GraphQL + Docker Microservices architecture. In his series, the backends were microservices but React was not hosted on Docker. I wanted it all on Docker, so I had to research a lot, about integrating React (especially Next.js) with Docker.

After a few days of research and setting up a Containerized Next.js App, I am here to share with you how to do it.

Hope you like it :)

---

# 🦋 Getting Started

Setting up a Next.js shouldn't be hard.

```bash
yarn create next-app
```

**Wait! We are not doing it all from scratch.**

Instead, I would recommend you to clone [this repo](https://github.com/KumarAbhirup/dockerized). We will learn about containerized Next.js from there. In this way, you will be able to compare your progress to that repository so that you can ensure you don't get lost in a long tutorial.

[Click here](https://github.com/KumarAbhirup/dockerized) to access the GitHub repository.

The above repository includes...

- A setup that is scalable. You may append your dockerized backends to it later.
- ESLint + Prettier setup included.
- It's TypeScript. :)

# 🔰 Things you need

- Docker Installed on your machine
- Some basic knowledge of Next.js

# 🚀 Clone and Setup the repository

- Run the below command

```bash
git clone https://github.com/KumarAbhirup/dockerized dockerized

cd dockerized
```

- Rename all the `.env.example` to `.env`. You'll find it in `packages/landingpage`

- Create a `.env` file in the root of the directory.

As you cloned the project, the Next.js App is ready to run.

Just run the below command to fire up the development environment for the Next.js project.

```bash
docker-compose up
```

---

# 👁 But Kumar, how does this thing even work

You might be wondering where your Next.js project is staying.

It is in the `packages/landingpage`...

![Next.js Project Folder Structure](https://i.ibb.co/yqX1wSC/Screenshot-2020-03-27-at-5-18-48-PM.jpg)

You might be wondering why that Next.js project is kept deep inside the file system.

I did it because no one dockerizes Next.js when they are only using Next.js...

Dockerizing makes sense when you have a huge container architecture that connects your React frontends to the Containerized backends.

So, the repository would not just contain a Next.js project but would have backends kept in the same `packages` folder.

---

# 📦 How to containerize Next.js

To use Docker to containerize any code, we need to have a `Dockerfile` in the package. Every container has its own `Dockerfile`.

Next.js too, will have its own Dockerfile. Let us take a look at it.

[**`packages/landingpage/Dockerfile`**](https://github.com/KumarAbhirup/dockerized/blob/master/packages/landingpage/Dockerfile)

```docker
FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
```

Let me explain what's happening here. Here, by `FROM node:12`, we are telling Docker to work with the Node.js image.

`ENV PORT 3000` just exposes the environment variable `PORT=3000`.

The below code snippet tells docker to create directories, namely `/usr/src/app`. We also tell Docker to use that directory as its primary workspace (for carrying out processes) hereafter.

```
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
```

The below code snippet copies `package.json` and `package-lock.json` from your local cloned repository to the Docker Container and then runs `npm install` on it. I recommend you to take a look at [**`package.json`**](https://github.com/KumarAbhirup/dockerized/blob/master/packages/landingpage/package.json) of the Next.js container so you get the idea.

```
COPY package*.json /usr/src/app/
RUN npm install
```

Now that we have all the `node_modules` ready, below code will copy our code from our local computer directory and will put it into the Docker Container Directory.

```
# Copying source files
COPY . /usr/src/app
```

Then the `Dockerfile` builds the Next.js app, exposes port 3000 (where Next.js works by default), and runs the command `npm run dev`.

```
# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
```

I hope you understood all that is happening due to the Dockerfile.

---

> Now, we have successfully containerized the application with Next.js! But we are not yet done.

For hot-reloading to work with Next.js and Docker, you need to have the below code snippet added to the `packages/landingpage/next.config.js`.

```javascript
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }

    return config
  }
}
```

---

We are still not done!

To run all our containers (in this case only one) together successfully, we will need a `docker-compose.yml` file in the root of the project.

Check out the [**`docker-compose.yml`**](https://github.com/KumarAbhirup/dockerized/blob/master/docker-compose.yml) in your folder structure.

```docker
version: "3.3"

services:
  nextjs:
    ports:
      - 3000:3000
    build:
      context: packages/landingpage
      dockerfile: Dockerfile
    volumes:
      - ./packages/landingpage:/usr/src/app
      - /usr/src/app/node_modules
      - /usr/src/app/.next
    env_file:
      - .env
```

The above code snippet makes sure that port 3000 is exposed. The `docker-compose.yml` file also tells Docker what services to build and which `Dockerfile` to use.

The `env_file` tells the composer to use a `.env` file which if you have not yet made in your project, please add it for it to work.

The `volumes` part is very important here. Without it, your Next.js will work, but the \_Hot Reloading Developmental Feature` would not work.

---

# 🔥 Hurray

If you surf through the repository carefully, you will understand how to containerize Next.js with Docker.

**We are done!**

To run the Dockerized Next.js app...

Run **`docker-compose up`** and open `http://localhost:3000` in your browser.

To make changes in code, make changes to `packages/landingpage/pages/index.tsx` file to see your website development experience come alive.

---

# 🚀 For production

When deploying to production, just make sure that you make a small change in your `packages/landingpage/Dockerfile`.

Change the last line (`CMD "npm" "run" "dev"`) to **`CMD "npm" "start"`**.

---

# 💚 Links

- [Source Code](https://github.com/KumarAbhirup/dockerized/)
- [Docker + Next.js Tutorial](https://www.codemochi.com/blog/2019-08-27-nextjs-hmr/)
