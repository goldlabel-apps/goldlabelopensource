---
order: 10
cover: false
parentSlug: "/docs/api"
slug: "/docs/api/overview"
title: "Overview"
description: "Firebase Cloud Functions"
category: "api"
icon: "doc"
image: "/jpg/climate-change.jpg"
keywords: "api"
twitter: "@listingslab"
---
## Open Source API

#### What's an API?

An [application programming interface](https://en.wikipedia.org/wiki/API) (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.[1] A document or standard that describes how to build or use such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation. Whereas a system's user interface dictates how its end-users interact with the system in question, its API dictates how to write code that takes advantage of that system's capabilities.


## TypeScript

Shape

```javascript
export type OpenSourceShape = {
    notification?: {
        code: string
        status: string
        message: string
    }
}
```

```javascript
  "compilerOptions": {
    "esModuleInterop": true,
```

## Express

```javascript
const app = express();
app.use(cors({credentials: true}));
```

## Firebase Cloud Functions

Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by background events, HTTPS requests, the Admin SDK, or Cloud Scheduler jobs. Your JavaScript, TypeScript or Python code is stored on Google Cloud infrastructure and runs in a managed environment. There's no need to manage and scale your own servers
