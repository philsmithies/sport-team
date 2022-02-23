# Sport-Thieme Code Challenge

A Coach viewing application built using Next.js, Typescript and GraphQL.

![Home](./public/images/Home_Readme.png)

![Edit](./public/images/Edit_Readme.png)

<!-- Table of Contents -->

## Table of Contents

- [Overview](#overview)
- [What's the Challenge About](#challenge)
- [Features](#features)
- [Further Goals](#further-goals)
- [Use Case](#use-case)
- [Todos](#todos)
- [Installation](#installation)
  - [Setting Up The Database](#setting-up-database)
  - [Setting up Dev Server](#dev-server)
  - [Generate Types](#types)
- [How to Submit](#submit)

<!-- Challenge -->

## What's the challenge about

This project is created by Sport-Thieme to help us to determine, if certain applicants are ready to work in our enviroment.
We want do see how familiar you are with typescript, graphql and next.

<!-- Features -->

## Features

- The User can view all available Coaches
- Coaches can be sorted and filtered by their specialty.
- Profile page for each Coach, complete with the ability to update specialties and details.
- The profile pages make use of SSR, we could expand this to the whole application using the cache and an initial props value but I've just done it per coach's profile page for now.
- I used Material UI's latest v5 update. I styled it using the brand colours and v5 specifications for styling conventions.
- Media queries cover tablet use of the application for staff in the stores.
- Pagination to not overload the user with all the coaches.
- Ability to favourite the coaches that are your favourite. I used Apollo's Reactive variables for this, we could also expand this to persist between sessions by using the[apollo-3-cache-persist](https://github.com/apollographql/apollo-cache-persist).

<!-- Further Goals -->

## Further Goals

- I'd like to implement endless scrolling, I started working on it but with the auto generated types I didn't want to duplicate any of my backend logic. I saw we'd need to create a new resolver so we could get the cursor logic onto the coaches and felt like offset pagination would work for now as an MVP.

<!-- Use Case -->

## Use Case

Sport-Thieme displays a dynamic list of sports coaches on the website. In order to be able to create new and edit existing entries, we want to provide an interface for our employees to accomplish those tasks. Your assignment is to provide a solution for this use case.

<!-- Todos -->

## Todos

The first 5 todos are required, all the others are bonus tasks. Please don't change anything backend related and use the graph as shipped in /pages/api.

- [x] Write graphql queries against https://localhost:3000/api<br>Use your queries manually or with the already installed codegen `yarn generate:types`.<br>You got one query in the graphql folder for free.
- [x] Create a UI to list all our coaches at Sport-Thieme with the Material-UI components (already installed)
- [x] Create a UI for a single coach with the Material-UI components (already installed)
- [x] Implement at least one mutation updating the coaches
- [x] Implement a mutation for adding specialties to the coach

### Bonus tasks for style points 😎

- [x] Implement pagination or endless scrolling to the coach list
- [x] Implement sorting to the coach list
- [x] Use Apollo reactive variables to create a local state to mark coaches as favourite

### Beyond bonus

- [x] Implement SSG or SSR

<!-- Installation -->

## Installation

```bash
yarn
```

<!-- Setting Up Database -->

## Setting up the local database

```bash
yarn setup
```

This will create a sqLite database in the prisma folder and seeds some data for you.
You only need to run this once.

<!-- Dev Server -->

## Starting the dev server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

<!-- types -->

## Generate types

As we are in a local app with a local server, please run the generate:types yourself.
In other sport-thieme projects, this will be done pre dev server start automatically.

Please be aware that the graphql server must be running (`yarn dev`) for this to work.

```bash
yarn generate:types
```

<!-- Submit -->

## How to submit your assignment

Please clone our repository and implement tasks described in the [readme](#Todos). Do not fork it and to not create pull requests as those will be publicly visible and other candidates might see it.

After finishing the assignment, please send us a link to your repository or a zip file replying to the e-mail with the coding challenge.

<div align="center">

---

[Top](#table-of-contents)

---

</div>
